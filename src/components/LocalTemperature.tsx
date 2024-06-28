"use client";
import { weatherFetcher } from "@/lib/utils/weatherFetcher";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import { getHightestTemp, getLowtestTemp } from "@/lib/utils/basicTempAPI";
import { HourlyWeather } from "@/types/hourlyWeather";

export const LocalTemperature = ({
  hightestTemp,
  lowtestTemp,
}: {
  hightestTemp: number | string;
  lowtestTemp: number | string;
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex justify-start items-center">
        <p className=" [writing-mode:vertical-lr] text-xl">最高</p>
        <p className="text-4xl">{`${hightestTemp}°`}</p>
      </div>

      <div className="flex justify-start items-center">
        <p className=" [writing-mode:vertical-lr] text-xl">最低</p>
        <p className="text-4xl">{`${lowtestTemp}°`}</p>
      </div>
    </div>
  );
};
