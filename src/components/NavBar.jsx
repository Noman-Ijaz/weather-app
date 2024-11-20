import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import { Img, PrimaryButton } from "../shared";
import { GlobalSearch } from "./GlobalSearch";

export const NavBar = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"themePrimary"}
      boxShadow={"0px 4px 22px rgba(224, 122, 95, 0.7)"}
      borderRadius={"10px"}
      py={2}
      px={{ xs: 2, sm: 4.5 }}
    >
      <Grid
        item
        xs={12}
        md={4.5}
        display={"flex"}
        justifyContent={{ xs: "center", md: "flex-start" }}
        mb={{ xs: 2, md: 0 }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Img src={Logo} sx={{ width: "30px" }} />
        </Link>
      </Grid>
      <Grid item xs={9} sm={6} md={3}>
        <GlobalSearch />
      </Grid>
      <Grid item xs={3} md={4.5} display={"flex"} justifyContent={"end"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <PrimaryButton> Home</PrimaryButton>
        </Link>
      </Grid>
    </Grid>
  );
};
