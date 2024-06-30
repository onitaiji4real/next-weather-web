import { getWeatherCodeDescription } from "@/lib/utils/wmoWeatherCodeMap";
import React from "react";

interface DayWeatherProps {
  month: string;
  day: string;
  highTemp: number;
  lowTemp: number;
  weatherCode: number;
}

export const DayWeather: React.FC<DayWeatherProps> = ({
  month,
  day,
  highTemp,
  lowTemp,
  weatherCode,
}) => {
  const code = getWeatherCodeDescription(weatherCode.toString());
  return (
    <div className="border ">
      <h2>{`${month}/${day}`}</h2>
      <div className="flex">{`${lowTemp}° - ${highTemp}°`}</div>

      <h2>{code.description}</h2>
    </div>
  );
};
