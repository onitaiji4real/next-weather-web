import React from "react";

export const WindSpeed = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-5xl">{`3`}</h2>
        <div>
          <p>級</p>
          <p>風力</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-5xl">{`3`}</h2>
        <div>
          <p>公尺/秒</p>
          <p>風速</p>
        </div>
      </div>
    </div>
  );
};
