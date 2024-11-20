import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Error, HourlyCard, Loader } from "../shared";
import { useGetHourlyWeatherQuery } from "../store/weatherApi";
import { weatherIcons } from "../constants";

export const HourlyWeather = () => {
  const params = useParams();

  const { data, isLoading, isError } = useGetHourlyWeatherQuery(params.cityKey);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  const getHours = data.map((hours) => {
    const setHour = new Date(hours.DateTime);
    const getHour = setHour.toLocaleTimeString("en-US");
    const weatherName = hours.IconPhrase;
    const getIcons = weatherIcons.find((valueA) => {
      return valueA.name == weatherName;
    });
    return { getHour, getIcons, ...hours };
  });

  return (
    <Grid container spacing={1} mt={10}>
      <Grid xs={12} mb={3} ml={2.5}>
        <Typography variant="h3" color="themePrimary">
          Hourly
        </Typography>
      </Grid>
      {getHours?.map((hourly, i) => (
        <Grid item xs={12} sm={4} md={2} key={i}>
          <HourlyCard data={hourly} />
        </Grid>
      ))}
    </Grid>
  );
};
