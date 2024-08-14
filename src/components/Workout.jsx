import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  const { workout } = props;

  return (
    <SectionWrapper title={["The", "Danger", "Zone"]} header={"Welcome To"}>
      {workout.map((exercise, i) => {
        return <ExerciseCard index={i} key={i} exercise={exercise} />;
      })}
    </SectionWrapper>
  );
}
