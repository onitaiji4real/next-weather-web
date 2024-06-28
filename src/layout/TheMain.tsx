import { LocalHumadity } from "@/components/LocalHumadity";
import LocalWeatherInfo from "@/components/LocalWeatherInfo";
import { LocalWindSpeed } from "@/components/LocalWindSpeed";
import React from "react";

export default function TheMain() {
  return (
    <main className=" flex flex-col items-center justify-start pt-10 gap-4">
      <LocalWeatherInfo />
      <div className="flex justify-between gap-4 w-full ">
        <LocalWindSpeed windDirection={146} />
        <LocalHumadity />
      </div>
    </main>
  );
}
