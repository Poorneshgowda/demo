import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Registration from './Registration';
import Student from './Student';
import SingUp from './SignUp';
import EventObjectDemo from './EventObjectsDemo';
import DemoLifeCycle from './DemoLifeCycle';
import { Component } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>


   <Registration/>
  
   </React.StrictMode>
);

reportWebVitals();















// //------------------------------------------------------------------------------------------------
// // function Blog(props) {

// //    const sidebar = (
// //       <ul>
// //          {props.posts.map((post)=>
// //          <li key={post.id}>{post.title}</li>)}
// //       </ul>
// //    );

// //    const content =  props.posts.map((post)=>
// //    <div key={post.id}>
// //       <h3>{post.title}</h3>
// //       <p>{post.content}</p>

// //    </div>);

// //    return (
// //       <div>
// //          {sidebar}
// //          <hr />
// //          {content}
// //          <hr />
// //       </div>
// //    );
// //    }
// //    const posts = [
// //       {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
// //       {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// //     ];

//          // const root = ReactDOM.createRoot(document.getElementById('root'));
//          // root.render(<Blog posts={posts} />);
// //--------------------------------------------------------------------------------------------------------------------
  

// class ReactForm extends React.Component
// {
//    constructor()
//    {
//       super();
//       this.state={username:"",city:"",language:"", errorMsg:"" }
//    }


//    handleSubmit=(event)=>
//    {
//       event.preventDefault();
//       this.setState({
//       Username:event.target.name.value,
//       city:event.target.email.value,
//       language:event.target.contact.value
//       })
//    }


//    validateName=(event)=>
//    {
//       const value=event.target.value;

//       if(isNaN(+value))
//       {
//          this.setState({errorMsg:""})
//       }
//       else{
//          this.setState({errorMsg:"Invalid....."})
//       }
//    }





//    render()
//    {
//       return(

//       <div>

//          <form onSubmit={this.handleSubmit}>
//          {this.state.name}<br/>
//          {this.state.email}
//          {this.state.contact}<br/>
//            {/* // Name : <input type="text" name="username"  onChange={this.validateName} required/> <br/> */}
//             {/* City : <input type="text" name="city"/>  <br/> */}

            

//                 <label className='form-label' for="name">Enter Name:</label>
//                 <input type='text' id="name" placeholder='EnterName' onChange={this.validateName} className='form-control' required/>
//                 <br/>


//                 <label className='form-label' for="email">Enter Email:</label>
//                 <input type='email' id="email" placeholder='Enter Email' className='form-control'/>
//                 <br/>


//                 <label className='form-label' for="contact">Enter Contact:</label>
//                 <input type='Number' id="contact" placeholder='Enter Contact' className='form-control'/>
//                 <br/>

//                 <label className='form-label' for="address">Enter Address:</label>
//                 <input type='text' id="address" placeholder='Enter Address' className='form-control'/>
//                 <br/>
                
//                 <button className='btn btn-danger'>Submit</button>

//             {this.state.errorMsg}
//       </form>
//       </div>
//       );
//       }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ReactForm />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
