import React from "react";
import Student from "./Student";

export default class Department extends React.Component {
  render() {
    const v = { language: "English", topic: "React", concept: "Props" };

    return (
      <div>
        <h1>Student details are below</h1>
        <Student var={v} />
        <hr />
      </div>
    );
  }
}
