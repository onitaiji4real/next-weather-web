import { SendHorizontal } from "lucide-react";
import React from "react";

interface WindProps {
  windDirection: number;
}

export const WindDirection = ({ windDirection }: WindProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SendHorizontal
        size={100}
        style={{ transform: `rotate(${windDirection - 90}deg)` }}
      />
      <h2 className="text-5xl">{`${windDirection}°`}</h2>
    </div>
  );
};
