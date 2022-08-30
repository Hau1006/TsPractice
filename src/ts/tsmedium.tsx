import React from "react";

const TsMedium = () => {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
  }
  const defaults: User = {
    id: 1,
    firstName: "con ga ",
    lastName: "con heo ",
  };
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

  const getUser = (user: User) => {
    return user.firstName;
  };
  return (
    <>
      <div>{isOptionObject({ first: "congaty", second: "con cho ty " })}</div>
      <div>
        {isOptionObject2({ first: "con cho ty ", second: "ccmmmmm ty " })}
      </div>
      <div>{getUser(defaults)}</div>
    </>
  );
};

export default TsMedium;
