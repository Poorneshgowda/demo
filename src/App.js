// //import logo from './logo.svg';
 import './App.css';

//const { render } = require("@testing-library/react");

import React from "react";
import User from "./User";

class App extends React.Component

{
    constructor()
    {
        super();
        this.state={delete:false};

    }


    render() {
        return(
            <div>
                <h1>User List</h1>
                <button onClick={() => this.state({ delete:true})}> Delete Users</button>
                {this.state.delete ? null : <User />}
            </div>
        );
    }
}
export default App;