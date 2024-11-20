import { Card, Grid, Typography, Box } from "@mui/material";
import { Img } from "./Img";

export const DailyCard = ({ data }) => {
  const { Day, Temperature, day, getIcons } = data;
  return (
    <Card
      sx={{
        backgroundColor: "themePrimary",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1.5,
        }}
      >
        <Box
          sx={{
            backgroundColor: "themeSecondary",
            borderRadius: "5px",
            py: 1,
            px: 2.5,
          }}
        >
          <Typography fontSize="12px" fontWeight={500} color="themePrimary">
            {day}
          </Typography>
        </Box>
        <Img src={getIcons?.icon} alt={Day.IconPhrase} sx={{ my: 2 }} />
        <Grid display={"flex"} alignItems={"center"}>
          <Typography variant="h1" color="themeSecondary">
            {Temperature.Maximum.Value}
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
              F
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: "auto",
            p: 1.25,
            width: "100%",
            borderRadius: "5px",
            border: "1px solid",
            borderColor: "themeSecondary",
            filter: "drop-shadow(0px 1px 5px #010101)",
            color: "themeSecondary",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            color={"themeSecondary"}
            fontSize={"12px"}
            fontWeight={400}
          >
            {Day.IconPhrase}
          </Typography>
        </Box>
      </Grid>
    </Card>
  );
};
