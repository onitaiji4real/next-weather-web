import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import { getCurrentHourIndex } from "@/lib/utils/commomAPI";
import { SendHorizontal } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

interface WindProps {
  windDirection: number;
}

export const WindDirection = ({ windDirection }: WindProps) => {
  const data = useSelector(HourlyWeatherSlice);

  const currentWindDirection = data
    ? data.hourly.wind_direction_10m[getCurrentHourIndex()]
    : 0;

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <SendHorizontal
        size={100}
        style={{ transform: `rotate(${currentWindDirection - 90}deg)` }}
      />
      <h2 className="text-5xl">{`${currentWindDirection}°`}</h2>
    </div>
  );
};
