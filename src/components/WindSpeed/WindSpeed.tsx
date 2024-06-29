import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import {
  getCurrentHourIndex,
  getWindSpeedToBeaufort,
} from "@/lib/utils/commomAPI";
import React from "react";
import { useSelector } from "react-redux";

export const WindSpeed = () => {
  const data = useSelector(HourlyWeatherSlice);

  const currentWindSpeed = data.hourly.wind_speed_10m[getCurrentHourIndex()];
  const currentWindLevel = getWindSpeedToBeaufort(
    data.hourly.wind_speed_10m[getCurrentHourIndex()]
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-5xl">{currentWindLevel}</h2>
        <div>
          <p>級</p>
          <p>風力</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-5xl">{currentWindSpeed}</h2>
        <div>
          <p>公尺/秒</p>
          <p>風速</p>
        </div>
      </div>
    </div>
  );
};
