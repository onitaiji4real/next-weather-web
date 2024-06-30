export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m?: string;
    relative_humidity_2m?: string;
    dew_point_2m?: string;
    apparent_temperature: string;
    weather_code: string;
    wind_speed_10m?: string;
    wind_direction_10m?: string;
  };
  hourly: {
    time: string[];
    temperature_2m?: number[];
    relative_humidity_2m?: number[];
    dew_point_2m?: number[];
    apparent_temperature: number[];
    weather_code: number[];
    wind_speed_10m?: number[];
    wind_direction_10m?: number[];
  };
};

export type HourlyWeather = {
  isLoading: boolean;
  latitude: number;
  longitude: number;
  country: string;
  name: string;
  hourly: WeatherData["hourly"];
  future: WeatherData["hourly"];
};
