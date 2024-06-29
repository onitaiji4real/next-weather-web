"use client";
import TheHeader from "@/layout/TheHeader";
import React from "react";
import Layout from "@/layout/Layout";
import { Provider } from "react-redux";
import { store } from "./store";
export default function page() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
}
