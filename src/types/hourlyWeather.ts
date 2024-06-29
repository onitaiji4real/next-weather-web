export type HourlyWeather = {
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    weather_code: number[];
    apparent_temperature: number[]; // 表觀溫度
    wind_speed_10m: number[]; //風速10m
    wind_direction_10m: number[];
    dew_point_2m: number[];
  };
};
