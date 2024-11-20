import { Grid, Typography } from "@mui/material";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { navLinks } from "../constants";
import theme from "../theme";
export const ForeCast = () => {
  const params = useParams();

  const activeStyle = {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.themeSecondary,
    height: "30px",
    borderRadius: "5px",
    width: "100%",
    fontWeight: 500,
    fontSize: "12px",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    lineHeight: 2.5,
  };

  const defaultStyle = {
    background: theme.palette.themeSecondary,
    height: "30px",
    borderRadius: "5px",
    width: "100%",
    color: theme.palette.themePrimary,
    border: "1px solid",
    bordercor: "theme.palette.themePrimary",
    fontWeight: 500,
    fontSize: "12px",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    lineHeight: 2.5,
  };

  return (
    <Grid>
      <Typography variant="h1" my={4} textAlign={"center"} color="themePrimary">
        {params.cityName}
      </Typography>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          container
          xs={12}
          sm={10}
          md={6}
          justifyContent={"center"}
          columnSpacing={{ xs: 2, sm: 4.5 }}
          flexWrap={"nowrap"}
        >
          {navLinks.map((link, i) => (
            <Grid item xs={2} key={i}>
              <NavLink
                to={`/forecast/${params.cityName}/${params.cityKey}/${link.routeID}`}
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                {link.name}
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Outlet />
    </Grid>
  );
};
