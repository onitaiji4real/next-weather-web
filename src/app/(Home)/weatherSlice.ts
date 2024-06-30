import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { HourlyWeather } from "@/types/hourlyWeather";
import axios from "axios";

const initialState: HourlyWeather = {
  country: "Taiwan",
  name: "FengShan",
  isLoading: false,
  latitude: 22.6266,
  longitude: 120.3613,
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
  future: {
    time: [],
    apparent_temperature: [],
    weather_code: [],
  },
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const hourlyUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,,dew_point_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&forecast_days=1`;
    const futureUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,weather_code`;

    const [hourlyResponse, futureResponse] = await Promise.all([
      axios.get(hourlyUrl),
      axios.get(futureUrl),
    ]);

    return {
      hourlyData: hourlyResponse.data,
      futureData: futureResponse.data,
    };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCoordinates(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    setLocation(
      state,
      action: PayloadAction<{ name: string; country: string }>
    ) {
      state.name = action.payload.name;
      state.country = action.payload.country;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hourly = action.payload.hourlyData.hourly;
        state.future = action.payload.futureData.hourly;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setCoordinates, setLocation } = weatherSlice.actions;

export const HourlyWeatherSlice = (state: RootState) => state.weatherReducer;

export default weatherSlice.reducer;
