import React from "react";
import Button from "./Button";
export default function Hero() {
  return (
    <div className=" p-4 min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="felex flex-col gap-4">
        <p>ITS TIME TO GET</p>
        <h1 className="font-semibold uppercase text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Swole<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light ">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>

      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept and Begin"}
      ></Button>
    </div>
  );
}
