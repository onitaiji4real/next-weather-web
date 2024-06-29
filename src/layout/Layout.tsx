import React, { useEffect } from "react";
import TheHeader from "./TheHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TheMain from "./TheMain";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, HourlyWeatherSlice } from "@/app/(Home)/weatherSlice";
import type { AppDispatch } from "@/app/(Home)/store";

export default function Layout() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(HourlyWeatherSlice);
  const longitude = data.longitude;
  const latitude = data.latitude;

  useEffect(() => {
    // dispatch(fetchWeather({ latitude: 22.6266, longitude: 120.3613 }));
    dispatch(fetchWeather({ latitude, longitude }));
  }, [dispatch]);

  return (
    <>
      <TheHeader />
      <MaxWidthWrapper>
        <TheMain />
      </MaxWidthWrapper>
    </>
  );
}
