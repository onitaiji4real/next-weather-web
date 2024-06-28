"use client";
import React from "react";
import { LocalTemperature } from "./LocalTemperature";
import { HourlyWeather } from "@/types/hourlyWeather";
import useSWR from "swr";
import { weatherFetcher } from "@/lib/utils/weatherFetcher";
import { getHightestTemp, getLowtestTemp } from "@/lib/utils/basicTempAPI";
import { getCurrentWeather } from "@/lib/utils/commomAPI";

export default function LocalWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=22.6266&longitude=120.3613&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&forecast_days=1";

  const { data, isLoading, error } = useSWR<HourlyWeather>(url, weatherFetcher);

  const hightestTemp = data
    ? getHightestTemp(data.hourly.apparent_temperature)
    : "--";
  const lowtestTemp = data
    ? getLowtestTemp(data.hourly.apparent_temperature)
    : "--";

  const currentWeather = data
    ? getCurrentWeather(data)
    : { temperature: "--", humidity: "--", windSpeed: "--" };

  return (
    <>
      <div className="w-full min-h-60 bg-slate-400 border rounded-xl flex flex-col items-center p-5 gap-1">
        <h2 className="text-3xl">My Location</h2>
        <h6>鳳山區</h6>
        <p className=" text-8xl">{`${currentWeather.temperature}°`}</p>
        <div className="flex justify-center items-center gap-8">
          <LocalTemperature
            hightestTemp={hightestTemp}
            lowtestTemp={lowtestTemp}
          />
        </div>
      </div>
    </>
  );
}
