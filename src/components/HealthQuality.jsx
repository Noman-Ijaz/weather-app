import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { healthIcons } from "../constants";
import { Error, HealthCard, Loader } from "../shared";
import { useGetHealthQualityQuery } from "../store/weatherApi";

export const HealthQuality = () => {
  const params = useParams();
  const { data, isLoading, isError } = useGetHealthQualityQuery(params.cityKey);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  const getHealthQuality = data.map((health) => {
    const getActivityName = health.Name;
    const getIcon = healthIcons.find((value) => {
      return value.name == getActivityName;
    });
    return { getIcon, ...health };
  });

  const firstFourHealth = getHealthQuality.slice(0, 4);
  const firstFourOutdoor = getHealthQuality.slice(4, 8);
  const firstFourTravelling = getHealthQuality.slice(32, 35);

  return (
    <Grid container mt={10} spacing={2.5}>
      <Grid xs={12} ml={2.5}>
        <Typography variant="h3" color="themePrimary">
          Health
        </Typography>
      </Grid>
      {firstFourHealth?.map((health, i) => (
        <Grid item xs={12} sm={6} md={3} mb={{ xs: 3, md: 0 }} key={i}>
          <HealthCard data={health} />
        </Grid>
      ))}
      <Grid xs={12} mt={7.5}>
        <Typography variant="h3" color="themePrimary" ml={2.5}>
          Outdoor Activities
        </Typography>
      </Grid>
      {firstFourOutdoor?.map((health, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <HealthCard data={health} />
        </Grid>
      ))}
      <Grid xs={12} mt={7.5}>
        <Typography variant="h3" color="themePrimary" ml={2.5}>
          Travel & Commute
        </Typography>
      </Grid>
      {firstFourTravelling?.map((health, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <HealthCard data={health} />
        </Grid>
      ))}
    </Grid>
  );
};
