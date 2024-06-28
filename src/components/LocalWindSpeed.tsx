import React from "react";
import { SendHorizontal } from "lucide-react";
import { WindDirection } from "./WindSpeed/WindDirection";
import { WindSpeed } from "./WindSpeed/WindSpeed";

interface WindProps {
  windDirection: number;
}

export const LocalWindSpeed = ({ windDirection }: WindProps) => {
  //   const adjustedDirection = windDirection;

  return (
    <div className=" bg-slate-400 w-[50%] min-h-60 border rounded-xl flex justify-around items-center">
      <WindSpeed />
      <WindDirection windDirection={90} />
    </div>
  );
};
