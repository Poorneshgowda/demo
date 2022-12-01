import React from "react";

import './Registration.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", city: "", language: "", errorMsg: "" };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value.username,
      city: event.target.value.city,
      language: event.target.value.language,
    });
  }

  validateName(event) {
    const value = event.target.value;

    if (isNaN(value)) {
      this.setState({ errorMsg: "" });
    } else {
      this.setState({ errorMsg: "should be a string..." });
    }
  }

  render() {
    return (
        
      <div className="container">
        
        
        <form onSubmit={this.handleSubmit}>
        <h2>Registration Form</h2>
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
            
            <option value="Csharp">Csharp</option>
            <br/>
            <option value="Java">Java</option>
            <br/>
            <option value="Python">Python</option>
          </select>
          <br /> <br />
          <button type="submit">submit</button>
        </form>
        {this.state.errorMsg}
        
      </div>
    );
  }
}

export default Registration;