import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20 xl:px-28 ")}
    >
      {children}
    </div>
  );
}
