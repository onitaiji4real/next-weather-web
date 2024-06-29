"use client";
import React from "react";
import { LocalTemperature } from "./LocalTemperature";
import { getHightestTemp, getLowtestTemp } from "@/lib/utils/basicTempAPI";
import { getCurrentHourIndex } from "@/lib/utils/commomAPI";
import { useDispatch, useSelector } from "react-redux";
import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import { getWeatherCodeDescription } from "@/lib/utils/wmoWeatherCodeMap";
import { LoaderSpin } from "./LoaderSpin";
import { RootState } from "@/app/(Home)/store";

export default function LocalWeather() {
  const isLoading = useSelector(
    (state: RootState) => state.weatherReducer.isLoading
  );
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
      <div className="w-full min-h-60 h-96  bg-slate-400 border rounded-xl flex flex-col items-center justify-center ">
        {isLoading ? (
          <LoaderSpin />
        ) : (
          <div className="flex flex-col items-center p-5 gap-2">
            <h2 className="text-4xl">My Location</h2>
            <h6>{`${data.name}, ${data.country}`}</h6>
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
        )}
      </div>
    </>
  );
}
