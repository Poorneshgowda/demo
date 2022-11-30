import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Props/Home";
import Registration from "./Forms/Registration";
import Department from "./Props/Department";
import EventObjectsDemo from "./Events/EventObjectsDemo";
import DemoLifeCycle from "./LifeCycle/DemoLifeCycle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Home name="Sandip" />
    {/* <Department /> */}
    <Registration name="Sandip" city="Guwahati" />
    {/* <EventObjectsDemo />
    <DemoLifeCycle /> */}
  </React.StrictMode>
);
