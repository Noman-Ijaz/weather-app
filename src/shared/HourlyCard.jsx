import { Card, Grid, Typography } from "@mui/material";
import { Img } from "./Img";

export const HourlyCard = ({ data }) => {
  const { getHour, Temperature, IconPhrase, getIcons } = data;
  return (
    <Card
      sx={{
        backgroundColor: "themePrimary",
        borderRadius: "10px",
        p: 1.25,
      }}
    >
      <Grid>
        <Typography
          sx={{ color: "themeSecondary", fontWeight: 500, fontSize: "12px" }}
        >
          {getHour}
        </Typography>
        <Grid display={"flex"} alignItems={"center"}>
          <Typography variant="h1" color="themeSecondary">
            {Temperature.Value}
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
              {Temperature.Unit}
            </Typography>
          </Grid>
          <Img
            src={getIcons?.icon}
            alt={IconPhrase}
            sx={{ m: "auto", width: "80px" }}
          />
        </Grid>
        <Typography color={"themeSecondary"} fontWeight={500} fontSize={"12px"}>
          {IconPhrase}
        </Typography>
      </Grid>
    </Card>
  );
};
