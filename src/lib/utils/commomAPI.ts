import { HourlyWeather } from "@/types/hourlyWeather";
import { beaufortScaleMap } from "./windRange";
const getCurrentHourIndex = () => {
  const now = new Date();
  return now.getHours();
};

export const getCurrentWeather = (data: HourlyWeather) => {
  const temperature = data.hourly.apparent_temperature[getCurrentHourIndex()];
  const humidity = data.hourly.relative_humidity_2m[getCurrentHourIndex()];
  const windSpeed = data.hourly.wind_speed_10m[getCurrentHourIndex()];
  return {
    temperature,
    humidity,
    windSpeed,
  };
};

export const getWindSpeedToBeaufort = (windSpeed: number) => {
  // 輸入風速換算蒲福風級，如12.7km/h => reutrn 1
  for (const range of beaufortScaleMap) {
    if (windSpeed >= range.min && windSpeed <= range.max) {
      return range.level;
    }
  }
  return -1;
};
