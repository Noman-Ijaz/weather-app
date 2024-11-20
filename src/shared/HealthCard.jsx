import { Card, Grid, Typography } from "@mui/material";

export const HealthCard = ({ data }) => {
  const { getIcon, Name, Category } = data;
  return (
    <Card
      sx={{
        backgroundColor: "themePrimary",
        borderRadius: "10px",
        p: 1.2,
        pb: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid mb={"auto"}>{getIcon?.icon}</Grid>
      <Typography
        color="themeSecondary"
        fontSize={"12px"}
        fontWeight={400}
        mb={3}
        mt={1.5}
      >
        {Name}
      </Typography>
      <Typography color="themeSecondary" fontSize={"10px"} fontWeight={300}>
        {Category}
      </Typography>
    </Card>
  );
};
