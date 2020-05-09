import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ToDoApp from "./Todo";
import SimpleGet from "./SimpleGetReq";
import SendPost from "./sendPostReq";
import CrudApp from "./CrudExperement";
import Guide from "./NextItem";
import Water from "./temperatureChangeStateEx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ToDoApp /> */}
    {/* <SimpleGet /> */}
    {/* <SendPost /> */}
    <CrudApp />
    {/* <Guide /> */}
    {/* <Water /> */}
  </React.StrictMode>,
  rootElement
);
