import React from "react";

class User extends React.Component

{

    componentWillUnmount(){
        alert("Deleted User Sucessfully");
    }
    

    render(){
        return(
            <div>
                <h3>UserName:Poornesh</h3>
                <h3>Email:PoorneshGowda@gmail.com</h3>
            </div>
        );

    }
}
export default User;