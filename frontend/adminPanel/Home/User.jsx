import React from "react";
import Header from "../Header/header";
import { Outlet } from "react-router-dom";
const User = () => {
  return (
    <div>
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
