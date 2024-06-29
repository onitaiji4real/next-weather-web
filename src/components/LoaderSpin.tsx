import React from "react";
import { LoaderCircle } from "lucide-react";

export const LoaderSpin = () => {
  return (
    <>
      <LoaderCircle size={100} className="animate-spin" />
    </>
  );
};
