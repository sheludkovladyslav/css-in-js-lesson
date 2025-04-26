import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Button from "./components/Button";
import Paragraph from "./components/paragraph";
const root = ReactDOM.createRoot(document.getElementById("root"));
import TomatoButton from "./components/TomatoButton";
root.render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
