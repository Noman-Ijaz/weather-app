import {
  useGetCityCurrentWeatherQuery,
  useGetHealthQualityQuery,
} from "../store/weatherApi";
import { Card, Grid, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Error, HealthCard, Img, Loader } from "../shared";
import { weatherIcons, qualityList, healthIcons } from "../constants";

export const TodayWeather = () => {
  const params = useParams();

  const {
    data: todayForecast = [],
    isLoading: cureentLoader,
    isError: todayError,
  } = useGetCityCurrentWeatherQuery(params.cityKey);

  const {
    data: healthIndics = [],
    isLoading: helathLoader,
    isError: healthError,
  } = useGetHealthQualityQuery(params.cityKey);

  if (cureentLoader || helathLoader) {
    return <Loader />;
  }

  if (todayError || healthError) {
    return <Error />;
  }

  const getWeatherText = todayForecast.map((value) => {
    const weatherName = value.WeatherText;
    const getIcons = weatherIcons.find((valueA) => {
      return valueA.name == weatherName;
    });
    return { getIcons, ...value };
  });

  const [cureentForecast] = getWeatherText;

  const getHealthIcons = healthIndics.map((health) => {
    const getActivityName = health.Name;
    const getIcon = healthIcons.find((value) => {
      return value.name == getActivityName;
    });
    return { getIcon, ...health };
  });

  const firstThreeHealth = getHealthIcons.slice(0, 3);

  const time = new Date();
  const cureentTime = time.toLocaleTimeString();

  console.log("todayForecast", todayForecast);

  return (
    <Grid container mt={10}>
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h3" color="themePrimary">
          Weather
        </Typography>
        <Card
          sx={{
            bgcolor: "themePrimary",
            borderRadius: "10px",
            p: 1.25,
            display: "flex",
            mt: 2,
          }}
        >
          <Grid xs={6}>
            <Typography
              sx={{
                color: "themeSecondary",
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              Current
            </Typography>
            <Typography color={"themeSecondary"} fontSize={"12px"}>
              {cureentTime}
            </Typography>
            <Grid display={"flex"} alignItems={"center"}>
              <Typography variant="h1" color="themeSecondary">
                {cureentForecast?.Temperature?.Metric?.Value}
              </Typography>
              <Grid ml={0.5}>
                <Typography
                  color={"themeSecondary"}
                  fontSize={"10px"}
                  fontWeight={500}
                >
                  o
                </Typography>
                <Typography color={"themeSecondary"} fontSize={"10px"}>
                  c
                </Typography>
              </Grid>
              <Img
                src={cureentForecast.getIcons?.icon}
                alt={cureentForecast.WeatherText}
                sx={{ m: "auto", width: "80px" }}
              />
            </Grid>
          </Grid>
          <Grid xs={6}>
            {qualityList?.map((quality, index) => (
              <Box
                key={index}
                sx={{
                  p: 1.25,
                  mb: 1.25,
                  borderRadius: "5px",
                  border: "1px solid",
                  borderColor: "themeSecondary",
                  filter: "drop-shadow(0px 1px 5px #010101)",
                  color: "themeSecondary",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color={"themeSecondary"}
                  fontSize={"12px"}
                  fontWeight={400}
                >
                  {quality.qualityName}
                </Typography>
                <Typography
                  color={"themeSecondary"}
                  fontSize={"12px"}
                  fontWeight={300}
                >
                  {quality.qualityValue}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Card>
      </Grid>
      <Grid container mt={7.5}>
        <Typography variant="h3" color="themePrimary" mb={2}>
          Health & Activities
        </Typography>
        <Grid container columnSpacing={2.5}>
          {firstThreeHealth?.map((health, i) => (
            <Grid item xs={12} sm={6} md={3} mb={{ xs: 3, md: 0 }} key={i}>
              <HealthCard data={health} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
