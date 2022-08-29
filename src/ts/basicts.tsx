import React, { useState } from "react";

const Tsbasic = () => {
  type addTwoNumber = {
    first: number;
    second: number;
  };
  interface addTwoNumber2 {
    first: number;
    second: number;
  }
  const [add, setAdd] = useState<number>(0);
  // typebasic
  const isPlus = (number1: number, number2: number): number => {
    return number1 + number2;
  };
  const isObject = (params: { param1: number; param2: number }): number => {
    return params.param1 + params.param2;
  };
  const isObject2 = (params: addTwoNumber): number => {
    return params.first + params.second;
  };
  const isObject3 = (params: addTwoNumber2): number => {
    return params.first + params.second;
  };

  return (
    <>
      <h1> type for number : Easy </h1>
      <div style={{ fontSize: "50px" }}>{isPlus(1, 2)}</div>

      <hr />
      <h1> type for Object : Easy </h1>
      <div style={{ fontSize: "50px" }}>
        {isObject({ param1: 1, param2: 2 })}
      </div>

      <hr />
      <h1> type for Object : Easy2 with type vs operator = </h1>
      <div style={{ fontSize: "50px" }}>
        {isObject2({ first: 1, second: 2 })}
      </div>

      <hr />
      <h1> type for Object : Easy2 with interface = </h1>
      <div style={{ fontSize: "50px" }}>
        {isObject3({ first: 3, second: 3 })}
      </div>
    </>
  );
};

export default Tsbasic;
