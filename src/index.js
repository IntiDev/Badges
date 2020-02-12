import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    avatarUrl="./images/female_avatar_l3.svg"
    // avatarUrl="https://gravatar.com/avatar?d=identicon"
    firstName="Nombre"
    lastName="Apellido"
    jobTitle="Frontend developer"
    user="Inti"
  />,
  container
);
