import React from "react";

const TsAdvance = () => {
  interface Admin {
    id: number;
    firstName: string;
    lastname: string;
    Role: "admin" | "user" | "Super_User";
  }
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    Admin: boolean;
  }
  const defaulAdmin: Admin = {
    id: 2,
    firstName: "con ga ",
    lastname: "con chim ",
    Role: "admin",
  };
  const defaultUser: User = {
    id: 1,
    firstName: "con ga ",
    lastName: "con cho ",
    Admin: true,
  };
  const IsAdmin = (user: User) => {
    return user.id;
  };
  const checkAdmin = (user: Admin) => {
    return user.id;
  };
  interface Post {
    id: number;
    title: string;
  }

  interface dataUser {
    id: number;
    firstName: string;
    lastName: string;
    post: Post[];
    // cach 2
    // post: Array<Post>;
  }
  const IsUser: dataUser = {
    id: 1,
    firstName: " LALA",
    lastName: "gaga",
    post: [
      {
        id: 1,
        title: "con ga ty ",
      },
    ],
  };

  return (
    <>
      <div>{IsAdmin(defaultUser)}</div>
      <div>{checkAdmin(defaulAdmin)}</div>
    </>
  );
};

export default TsAdvance;
