import { Typography, Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Grid container mt={"auto"} py={2}>
      <Grid
        item
        container
        height={"40px"}
        bgcolor={"themePrimary"}
        boxShadow={"0px 4px 22px rgba(224, 122, 95, 0.7)"}
        borderRadius={"10px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography color="themeSecondary" fontWeight={400} fontSize={"12px"}>
          CopyRight @ 2022
        </Typography>
      </Grid>
    </Grid>
  );
};
