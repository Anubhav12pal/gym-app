import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className=" text-slate-400 font-semibold text-3xl sm:text-4xl md:text-5xl">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
export default function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setGoals,
    goal,
    setPoison,
    updateWorkout,
  } = props;
  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 3) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <SectionWrapper
        header={"generate your workout"}
        title={["It's", "Huge ", "o'clock"]}
      >
        <Header
          index={"01"}
          title={"Pick ypur poison"}
          description={"Select the workout"}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button
                onClick={() => {
                  setMuscles([]);
                  setPoison(type);
                }}
                className={
                  "px-4 bg-slate-950 border duration-200 hover:border-blue-900 py-3 rounded-lg " +
                  (type === poison ? "border-blue-900" : "border-blue-400")
                }
                key={typeIndex}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>

        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles to work on"}
        />
        <div className="flex flex-col p-3 bg-slate-750 border border-solid border-blue-400 rounded-lg-down">
          <button
            onClick={toggleModal}
            className="relative flex justify-center item-center"
          >
            <p className="capitalize">
              {muscles.length == 0 ? "Select muscle group" : muscles.join(" ")}
            </p>
            <i className="absolute right-3 top-1/3 translate-1/3 fa-solid fa-circle-down"></i>
          </button>

          {showModal && (
            <div className="flex flex-col px-3 pb-3 ">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                    className={
                      "hover:text-blue-400 duration-200 " +
                      (muscles.includes(muscleGroup) ? "text-blue-400" : "")
                    }
                    key={muscleGroupIndex}
                  >
                    <p className="uppercase">{muscleGroup}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <Header
          index={"03"}
          title={"Become what u want"}
          description={"Select the Objecti"}
        />
        <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                onClick={() => {
                  setGoals(scheme);
                }}
                className={
                  "px-4 bg-slate-950 border duration-200 hover:border-blue-900 py-3 rounded-lg " +
                  (scheme === goal ? "border-blue-900" : "border-blue-400")
                }
                key={schemeIndex}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>

        <Button func={updateWorkout} text={"Formulate"}></Button>
      </SectionWrapper>
    </div>
  );
}
