import React from "react";

const TsMedium = () => {
  interface Render {
    first?: string;
    second: string;
  }
  const isOptionObject = (params: { first?: string; second: string }) => {
    if (params.first) {
      return `${params.first}`;
    }
    return `${params.second}`;
  };

  const isOptionObject2 = (params: Render) => {
    if (params.first) {
      return `${params.first}`;
    }
    return `${params.second}`;
  };
  return (
    <>
      <div>{isOptionObject({ first: "congaty", second: "con cho ty " })}</div>
      <div>
        {isOptionObject2({ first: "con cho ty ", second: "ccmmmmm ty " })}
      </div>
    </>
  );
};

export default TsMedium;
