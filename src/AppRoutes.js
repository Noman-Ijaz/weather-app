import { Route, Routes } from "react-router-dom";
import {
  ForeCast,
  TodayWeather,
  HourlyWeather,
  HealthQuality,
  DailyWeather,
} from "./components";
import { Home } from "./pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/forecast/:cityName/:cityKey" element={<ForeCast />}>
        <Route path="" element={<TodayWeather />}></Route>
        <Route path="today" element={<TodayWeather />}></Route>
        <Route path="hourly" element={<HourlyWeather />}></Route>
        <Route path="health" element={<HealthQuality />}></Route>
        <Route path="daily" element={<DailyWeather />}></Route>
      </Route>
    </Routes>
  );
};
