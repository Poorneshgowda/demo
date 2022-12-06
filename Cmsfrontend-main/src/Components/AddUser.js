import React, { useState } from 'react';
import './AddUser.css'
import { useNavigate } from 'react-router-dom';


function AddUser(props) {
    const navigate = useNavigate();
    var [un, setun] = useState('');
    var [pass, setpass] = useState('');
    var [name, setname] = useState('');
    var [phoneno, setphoneno] = useState('');
    var [EmailId, setemailId] = useState('');
    var [Address, setaddress] = useState('');
    var [State, setstate] = useState('');
    var [Country, setcountry] = useState('');
    var [dob, setDOB] = useState('');

    var changeUn = (event) => {
        console.log(event.target.value)
        setun(event.target.value);
    }
    var changePass = (event) => {
        setpass(event.target.value);
    }
    var changeName = (event) => {
        setname(event.target.value);
    }
    var changePhoneno = (event) => {
        setphoneno(event.target.value);
    }
    var changeemailId = (event) => {
        setemailId(event.target.value);
    }
    var changeAddress = (event) => {
        setaddress(event.target.value);
    }
    var changeState = (event) => {
        setstate(event.target.value);
    }
    var changeCountry = (event) => {
        setcountry(event.target.value);
    }
    var changeDOB = (event) => {
        setDOB(event.target.value);
    }
    var registerUser = async (event) => {
        event.preventDefault();

        var user = {
            Name: name,
            phoneno: phoneno,
            EmailId: EmailId,
            Address: Address,
            DateOfBirth: dob,
            username: un,
            password: pass,
            state: State,
            Country: Country,
            role: '',
            status: 'active'
        };
        console.log(user)
        var response = await fetch('http://localhost:4094/api/Member/Register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            mode: 'cors'
        });
        if (response.status === 200) {
            alert("Registered")
            navigate('/')
        }
        else {
            alert("Invalid credentials")
        }
        var data = await response

        console.log(data);
    }
    return (

        <div className='userdiv'>
            <div>
                <h1>Register User</h1>
            </div>
            <form onSubmit={registerUser}>
                <label className='form-control'>Name</label>
                <input className='form-control' onChange={changeName} type="text" required />
                <label className='form-control'>Phoneno</label>
                <input className='form-control' onChange={changePhoneno} type="text" required />
                <label className='form-control'>EmailId</label>
                <input className='form-control' onChange={changeemailId} type="text" required />
                <label className='form-control'>Address</label>
                <input className='form-control' onChange={changeAddress} type="text" required />
                <label className='form-control'>State</label>
                <input className='form-control' onChange={changeState} type="text" required />
                <label className='form-control'>Country</label>
                <input className='form-control' onChange={changeCountry} type="text" required />
                <label className='form-control'>Date Of Birth</label>
                <input className='form-control' onChange={changeDOB} type="date" required />
                <label className='form-control'>Username</label>
                <input className='form-control' onChange={changeUn} type="text" required />
                <label className='form-control'>Password</label>
                <input className='form-control' type="password" onChange={changePass} required />
                <br />
                <button className='btn btn-success'>Register</button>
                <a href='/'>Already AUser? Login</a>
            </form>


        </div>
    );
}

export default AddUser;