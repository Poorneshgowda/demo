import React from "react";

class Student extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Hi Welcome! this is from Student.</h1>
        <p>language: {this.props.var.language}</p>
        <p>Topic: {this.props.var.topic}</p>
        <p>Concept: {this.props.var.concept}</p>
      </div>
    );
  }
}

export default Student;
