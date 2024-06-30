import { HourlyWeather } from "@/types/hourlyWeather";
import { beaufortScaleMap } from "./windRange";
import { fetcher } from "./weatherFetcher";
import { getHightestTemp, getLowtestTemp } from "./basicTempAPI";
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

export function extractMonthAndDate(dateTime: string): {
  month: string;
  date: string;
} {
  const date = new Date(dateTime);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return { month, date: day };
}

export interface DateInfo {
  month: string;
  day: string;
  highTemp: number;
  lowTemp: number;
  weatherCode: number;
}

export function filterFutureFiveDaysTimes(
  times: string[],
  temps: number[],
  weatherCodes: number[]
): DateInfo[] {
  const fiveDaysTimes: DateInfo[] = [];
  const days = new Set();

  for (let i = 0; i < times.length; i += 24) {
    const dayTemps = temps.slice(i, i + 24);
    const dayWeatherCodes = weatherCodes.slice(i, i + 24);
    const { month, date: day } = extractMonthAndDate(times[i]);
    const dateString = `${month} ${day}`;

    if (!days.has(dateString)) {
      days.add(dateString);
      fiveDaysTimes.push({
        month,
        day,
        highTemp: getHightestTemp(dayTemps),
        lowTemp: getLowtestTemp(dayTemps),
        weatherCode: weatherCodes[0],
      });
    }

    if (days.size >= 5) {
      break;
    }
  }

  return fiveDaysTimes;
}
