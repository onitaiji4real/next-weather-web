import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ModeSwitch from "@/components/ModeSwitch";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";

export default function TheHeader() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex justify-between items-center w-full pt-2.5 h-24 ">
          <div className="flex flex-col items-center relative">
            <TiWeatherCloudy size={60} />
            <h2 className="relative bottom-3">WeatherWeb</h2>
          </div>

          <div className="flex justify-start items-center gap-5">
            <SearchBar />
            {/* TODO: darkmode switch */}
            <ModeSwitch />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
