import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Map } from "../assets/images";
import { popularCityList } from "../constants";
import { Img } from "../shared";
import theme from "../theme";

export const Home = () => {
  return (
    <Grid container mt={10}>
      <Typography variant="h1" color="themePrimary">
        Popular Cities
      </Typography>
      <Grid container mt={3.5} spacing={2.5}>
        {popularCityList.map((popular, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link
              to={`/forecast/${popular.name}/${popular.key}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: "themePrimary",
                  borderRadius: "10px",
                  pt: 1.5,
                  pb: 0.75,
                  backgroundColor: "themePrimary",
                  boxShadow: "0px 4px 22px rgba(224, 122, 95, 0.7)",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
              >
                <Img
                  src={popular.img}
                  alt=""
                  sx={{
                    width: "150px",
                    height: "130px",
                    borderRadius: "68% 32% 63% 37% / 28% 42% 58% 72% ",
                    mb: 1,
                  }}
                />
                <Typography variant="h2" color="neutralWhite">
                  {popular.name}
                </Typography>
                <Typography color="neutralWhite" fontWeight={300} opacity={0.5}>
                  {popular.province}
                </Typography>

                <Box
                  sx={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "themeSecondary",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1.5,
                  }}
                >
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 12 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.29832 0.934351L9.93637 9.43454L1.2981 17.157"
                      stroke={theme.palette.themePrimary}
                      strokeWidth="2"
                    />
                  </svg>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Img
        src={Map}
        sx={{
          width: "100%",
          mt: 10,
          mb: 2,
          animation: "infinite",
          animationName: "effect",
          animationDuration: "0.6s",
          "@keyframes effect": {
            "0%": {
              filter: "hue-rotate(0deg)",
            },
            "100%": {
              filter: "hue-rotate(360deg)",
            },
          },
        }}
      />
    </Grid>
  );
};
