"use client";
import React from "react";
import { LocalTemperature } from "./LocalTemperature";
import useSWR from "swr";
import { weatherFetcher } from "@/lib/utils/weatherFetcher";
import { getHightestTemp, getLowtestTemp } from "@/lib/utils/basicTempAPI";
import { getCurrentHourIndex, getCurrentWeather } from "@/lib/utils/commomAPI";
import { useDispatch, useSelector } from "react-redux";
import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import { getWeatherCodeDescription } from "@/lib/utils/wmoWeatherCodeMap";
import Image from "next/image";

export default function LocalWeather() {
  const data = useSelector(HourlyWeatherSlice);
  const currentTemp = data.hourly.apparent_temperature[getCurrentHourIndex()];
  const todayHightestTemp = getHightestTemp(data.hourly.apparent_temperature);
  const todatLowtestTemp = getLowtestTemp(data.hourly.apparent_temperature);

  const weatherCode = data.hourly.weather_code[getCurrentHourIndex()];

  const weatherDescription =
    weatherCode !== undefined
      ? getWeatherCodeDescription(weatherCode.toString())
      : { description: "Unknown Weather Code", image: "" };

  return (
    <>
      <div className="w-full min-h-60 bg-slate-400 border rounded-xl flex flex-col items-center p-5 gap-2">
        <h2 className="text-3xl">My Location</h2>
        <h6>鳳山區</h6>
        <p className=" text-8xl">{`${currentTemp}°`}</p>
        <div className="flex justify-center items-center gap-8">
          <LocalTemperature
            hightestTemp={todayHightestTemp}
            lowtestTemp={todatLowtestTemp}
          />
        </div>
        <div className="flex justify-center items-center text-3xl pt-5 ">
          {weatherDescription.description}
        </div>
      </div>
    </>
  );
}
