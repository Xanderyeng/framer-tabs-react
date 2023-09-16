import React from "react";
import ReactDOM from "react-dom";
import TabComponent from "./TabComponent";
import tabs from "./tabs";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TabComponent tabs={tabs} />
  </React.StrictMode>,
  rootElement
);
