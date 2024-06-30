import React from "react";
import { DayWeather } from "./DayWeather";
import { useSelector } from "react-redux";
import { HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import { filterFutureFiveDaysTimes } from "@/lib/utils/commomAPI";
import { LoaderSpin } from "./LoaderSpin";
export const FutureWeather = () => {
  const data = useSelector(HourlyWeatherSlice);

  const futureTimes = filterFutureFiveDaysTimes(
    data.future.time,
    data.future.apparent_temperature,
    data.future.weather_code
  );

  data.isLoading; //根據這個來顯示<LoaderSpin />

  return (
    <>
      <div className="w-full min-h-60 h-50  bg-slate-400 border rounded-xl flex flex-col items-start justify-start p-4 ">
        <h2 className=" text-4xl pb-5">未來天氣預報</h2>
        <div className="flex items-center justify-center gap-3">
          {data.isLoading ? (
            <LoaderSpin />
          ) : (
            futureTimes.map(
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
            )
          )}
        </div>
      </div>
    </>
  );
};
