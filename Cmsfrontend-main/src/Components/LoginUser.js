import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginUser.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

LoginUser.propTypes = {


};

function LoginUser(props) {

    var [un, setun] = useState('');
    var [pass, setpass] = useState('');

    const navigate = useNavigate();
    async function Login() {

        var user = {
            username: un,
            password: pass,
        };
        console.log(user)
        var response = await axios.post('http://localhost:4094/api/Member/Login', user
        ).catch(function (error) {
            if (error.response) {
                alert("Invalid credentials")
            }
        })
        console.log(response.status)
        if (response.status === 200) {
            sessionStorage.setItem("key", un)
            navigate("/MemberPlans")
        }

    }

    return (
        <div className='loginuserdiv'>
            <div>
                <h1>Login User</h1>
            </div>
            <form>
                <label className='form-control'>Username</label>
                <input className='form-control' value={un} onChange={(e) => setun(e.target.value)} type="text" required />
                <label className='form-control'>Password</label>
                <input className='form-control' value={pass} type="password" onChange={(e) => setpass(e.target.value)} required />

                <br />
                <a href='Register'>New User? Register</a>
            </form>
            <button onClick={() => Login()} className='btn btn-success'>Login</button>
        </div>
    );
}

export default LoginUser;