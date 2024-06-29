import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { HourlyWeather } from "@/types/hourlyWeather";
import axios from "axios";

const initialState: HourlyWeather = {
  hourly: {
    time: [],
    temperature_2m: [],
    relative_humidity_2m: [],
    weather_code: [],
    apparent_temperature: [],
    wind_speed_10m: [],
    wind_direction_10m: [],
    dew_point_2m: [],
  },
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=22.6266&longitude=120.3613&hourly=temperature_2m,relative_humidity_2m,,dew_point_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&forecast_days=1";
    // "https://api.open-meteo.com/v1/forecast?latitude=22.6266&longitude=120.3613&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&forecast_days=1";
    const response = await axios.get(url);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const HourlyWeatherSlice = (state: RootState) => state.weatherReducer;

export default weatherSlice.reducer;
