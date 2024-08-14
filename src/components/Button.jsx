import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="mb-4 mx-auto boxShadow border-solid bg-slate-950 border-[2px] border-blue-400 px-8 py-4 rounded-md duration-200"
    >
      {text}
    </button>
  );
}
