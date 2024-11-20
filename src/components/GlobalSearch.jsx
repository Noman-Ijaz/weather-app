import { useGetCityQuery } from "../store/weatherApi";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalSearch = () => {
  const [city, setCity] = useState("");
  const { data: cities } = useGetCityQuery(city);

  const navigate = useNavigate();

  const getCityDetail = (value) => {
    navigate(`/forecast/${value.LocalizedName}/${value.Key}/today`);
  };
  return (
    <Autocomplete
      forcePopupIcon={false}
      options={cities || []}
      getOptionLabel={(opt) => opt?.LocalizedName}
      onChange={(event, value) => getCityDetail(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ p: 0, "&:hover": { borderColor: "red" } }}
        />
      )}
    />
  );
};
