import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tsbasic from "./ts/basicts";
import TsMedium from "./ts/tsmedium";
import TsAdvance from "./ts/tsAdvance";

const App = () => {
  const data = (data: string): string => {
    return data;
  };

  return (
    <>
      {/* <Tsbasic /> */}
      {/* <TsMedium /> */}
      <TsAdvance />
      <h1>{data("concho ty ")}</h1>
    </>
  );
};

export default App;
