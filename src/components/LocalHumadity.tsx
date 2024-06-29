import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import { getCurrentHourIndex } from "@/lib/utils/commomAPI";
import React from "react";
import { useSelector } from "react-redux";
import { LoaderSpin } from "./LoaderSpin";

export const LocalHumadity = () => {
  const data = useSelector(HourlyWeatherSlice);

  const currentHumadity =
    data.hourly.relative_humidity_2m[getCurrentHourIndex()];
  const currentDewPoint = data.hourly.dew_point_2m[getCurrentHourIndex()];

  return (
    <div className=" bg-slate-400 w-[50%] min-h-60 border rounded-xl p-4">
      {data.isLoading ? (
        <div className="flex justify-center items-center">
          <LoaderSpin />
        </div>
      ) : (
        <div>
          <h2 className=" text-4xl">濕度</h2>
          <div className="flex justify-center items-center text-8xl">
            {`${currentHumadity}%`}
          </div>
          <div className="pt-10 text-xl">{`目前露點溫度為: ${currentDewPoint}°`}</div>
        </div>
      )}
    </div>
  );
};
