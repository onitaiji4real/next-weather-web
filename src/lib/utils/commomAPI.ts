import { HourlyWeather } from "@/types/hourlyWeather";
import { beaufortScaleMap } from "./windRange";
import { fetcher } from "./weatherFetcher";
export const getCurrentHourIndex = () => {
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

export const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const getSearchCityLocation = async (cityName: string) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;
  const res = await fetcher(url);
  return res;
};
