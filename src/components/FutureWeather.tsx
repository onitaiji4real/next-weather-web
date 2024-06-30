import React from "react";
import { DayWeather } from "./DayWeather";
import { useSelector } from "react-redux";
import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import { filterFutureFiveDaysTimes } from "@/lib/utils/commomAPI";

export const FutureWeather = () => {
  const data = useSelector(HourlyWeatherSlice);

  const futureTimes = filterFutureFiveDaysTimes(
    data.future.time,
    data.future.apparent_temperature,
    data.future.weather_code
  );

  return (
    <>
      <div className="w-full min-h-60 h-50  bg-slate-400 border rounded-xl flex flex-col items-start justify-start p-4 ">
        <h2 className=" text-4xl">未來天氣預報</h2>
        <div className="flex items-center justify-center gap-3">
          {futureTimes.map(
            ({ month, day, highTemp, lowTemp, weatherCode }, index) => (
              <DayWeather
                key={index}
                month={month}
                day={day}
                highTemp={highTemp}
                lowTemp={lowTemp}
                weatherCode={weatherCode}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
