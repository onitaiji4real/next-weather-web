import React, { useEffect } from "react";
import TheHeader from "./TheHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TheMain from "./TheMain";
import { useDispatch } from "react-redux";
import { fetchWeather } from "@/app/(Home)/weatherSlice";
import type { AppDispatch } from "@/app/(Home)/store";

export default function Layout() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchWeather());
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
