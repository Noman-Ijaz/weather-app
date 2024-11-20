import { Container } from "@mui/material";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import {
  ForeCast,
  NavBar,
  Footer,
  TodayWeather,
  HourlyWeather,
  HealthQuality,
  DailyWeather,
} from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          py: 2.5,
        }}
      >
        <NavBar />
        <AppRoutes />
        <Footer />
      </Container>
    </>
  );
}

export default App;
