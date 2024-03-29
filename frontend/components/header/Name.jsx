import React from "react";
import { Phone } from "../Icons/icons";
import { Email } from "../Icons/icons";
const Name = () => {
  return (
    <div className="m-4 text-left text-white">
      <h1 className="text-2xl"> Dilawer Ali</h1>

      <div className="flex text-sm">
        <Phone />
        <a href="https://web.whatsapp.com/" className="text-sm mx-1">
          {" "}
          +923090812627
        </a>
      </div>
      <div className="flex">
        <Email />
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          className="text-sm mx-1"
        >
          {" "}
          aliwebdeveloper04@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Name;
