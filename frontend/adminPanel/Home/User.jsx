import React from "react";
import Header from "../Header/header";
import { Outlet } from "react-router-dom";
const User = () => {
  return (
    <div className="flex justify-items-center flex-col items-center">
      <section>
        <Header />
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default User;
