import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiKey = process.env.REACT_APP_API_KEY;
export const weatherApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://dataservice.accuweather.com",
  }),
  endpoints: (builder) => ({
    getCity: builder.query({
      query: (city) => {
        return {
          url: `/locations/v1/cities/autocomplete?apikey=${ApiKey}&q=${city}`,
          method: "GET",
        };
      },
    }),
    getCityCurrentWeather: builder.query({
      query: (cityKey) => {
        return {
          url: `/currentconditions/v1/${cityKey}?apikey=${ApiKey}`,
          method: "GET",
        };
      },
    }),
    getHealthQuality: builder.query({
      query: (cityKey) => {
        return {
          url: `/indices/v1/daily/1day/${cityKey}?apikey=${ApiKey}`,
          method: "GET",
        };
      },
    }),
    getFiveDaysWeather: builder.query({
      query: (cityKey) => {
        return {
          url: `/forecasts/v1/daily/5day/${cityKey}?apikey=${ApiKey}`,
        };
      },
    }),
    getHourlyWeather: builder.query({
      query: (cityKey) => {
        return {
          url: `/forecasts/v1/hourly/12hour/${cityKey}?apikey=${ApiKey}`,
        };
      },
    }),
  }),
});

export const {
  useGetCityQuery,
  useGetCityCurrentWeatherQuery,
  useGetHealthQualityQuery,
  useGetFiveDaysWeatherQuery,
  useGetHourlyWeatherQuery,
} = weatherApi;
