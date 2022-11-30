import React, { Component } from "react";

export default class DemoLifeCycle extends Component {
  constructor() {
    super();
    this.state = { value: "Welcome", PersonName: "Jack" };
  }

  //Before Mounting
  componentWillMount() {
    alert("do you want to learn React JS");
  }

  //After Mounting
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: "Thank you" });
    }, 5000);
  }

  changeValue = () => {
    this.setState({ value: "you can learn React in English" });
  };

  //Runs when changes made in DOM
  componentDidUpdate() {
    document.getElementById("mypara").innerHTML =
      "New value updated successfully" + this.state.value;
  }

  render() {
    return (
      <div className="container">
        <h3>
          {this.state.value} {this.state.PersoneName}{" "}
        </h3>
        <br />
        <p id="mypara"></p>
        <button type="button" onClick={this.changeValue}>
          Change Value
        </button>
        <hr />
      </div>
    );
  }
}
