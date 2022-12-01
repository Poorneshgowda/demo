
import React from "react";

class DemoLifeCycle extends React.Component

{
    constructor() {

        super();
        this.state={value:"Welcome", PersonName:"Poornesh"};

    }

componentWillMount()
    {
        alert("do you want to learn react")
    }

componentDidMount()
    {
        setTimeout(()=> {
            this.setState({value:"Thank You"})
        },5000);
    }


changeValue =() => {
    this.setState({value:"you can learn react in english"});
}
componentDidUpdate()
    {
        document.getElementById("mypara").innerHTML="new value inserted successfully"+this.state.value;
    }

    render()
    {
        return<div>
            <h1>{this.state.value} {this.state.PersonName}</h1>
            <br/>
            <p id = "mypara"></p>
            <button type="button" onClick={this.changeValue}> Change Value </button>
        </div>
    }
}

export default DemoLifeCycle ;
