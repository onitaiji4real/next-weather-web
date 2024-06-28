import React from "react";
import TheHeader from "./TheHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TheMain from "./TheMain";

export default function Layout() {
  return (
    <>
      <TheHeader />
      <MaxWidthWrapper>
        <TheMain />
      </MaxWidthWrapper>
    </>
  );
}
