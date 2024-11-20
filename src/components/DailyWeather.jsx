import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { DailyCard, Error, Loader } from "../shared";
import { useGetFiveDaysWeatherQuery } from "../store/weatherApi";
import { weatherIcons } from "../constants";

export const DailyWeather = () => {
  const params = useParams();

  const { data, isLoading, isError } = useGetFiveDaysWeatherQuery(
    params.cityKey
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  const { DailyForecasts } = data;

  const getDailyWeather = DailyForecasts.map((date) => {
    const toDate = new Date(date.Date);
    let day = toDate.toLocaleString("en-us", { weekday: "long" });
    const weatherName = date.Day.IconPhrase;
    const getIcons = weatherIcons.find((valueA) => {
      return valueA.name == weatherName;
    });
    return { day, getIcons, ...date };
  });

  return (
    <Grid container mt={10} columnSpacing={2} spacing={1}>
      <Grid xs={12} mb={2} ml={2.5}>
        <Typography variant="h3" color="themePrimary">
          Weather
        </Typography>
      </Grid>
      {getDailyWeather?.map((daily, index) => (
        <Grid item xs={12} sm={4} md={2} key={index}>
          <DailyCard data={daily} />
        </Grid>
      ))}
    </Grid>
  );
};
