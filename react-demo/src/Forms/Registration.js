import React from "react";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", city: "", language: "", errorMsg: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value.username,
      city: e.target.value.city,
      language: e.target.value.language,
    });
  }

  validateName(e) {
    const value = e.target.value;

    if (isNaN(value)) {
      this.setState({ errorMsg: "" });
    } else {
      this.setState({ errorMsg: "should be a string..." });
    }
  }

  render() {
    return (
      <div>
        <h2>React Form</h2>

        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="username"
            onChange={this.validateName}
            required
          />
          <br />
          City: <input type="text" name="city" required /> <br />
          Language:
          <select name="language" required>
            <br />
            <option value="C#">C#</option>
            <option value="Java">Java#</option>
            <option value="Python">Python</option>
          </select>
          <br /> <br />
          <button type="submit">submit</button>
        </form>
        {this.state.errorMsg}
        <hr />
      </div>
    );
  }
}

export default Registration;
