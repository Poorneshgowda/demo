import React, { useState, useEffect } from 'react';
import { UserContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdatePlans(props) {
    const { pid, _ } = useContext(UserContext);
    // var [pid, setpid]=useState('')
    var [duration, setduration] = useState('')
    var [amount, setamount] = useState('')
    // const navigate = useNavigate();
    // (`http://localhost:5148/api/Customer/GetUserByUserName?un=${username}`)

    useEffect(() => {
        getPlan();
    }, [])
    const getPlan = async () => {
        var response = await fetch(`http://localhost:4094/api/Plan/${pid}`)
        var data = await response.json();
        console.log(data[0]);
        //setpid(data[0]['pid'])
        setamount(data[0]['amount'])
        setduration(data[0]['duration'])
        //var a = data.username;  
    }
    var updateplans = () => {
        let item = { amount, duration, pid };
        console.log("item", item)
        fetch('http://localhost:4094/api/Plan/1', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'cors'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                getPlan();
            })
        })
    }

    return (
        <div className='updatePlandiv'>
            <h1>Update Plans</h1>
            {/* <label >PId</label>
            <input value={pid} onChange={(e) => {setpid(e.target.value)}} type="text" />
            <br/> */}


            <label >Amount</label>
            <input value={amount} onChange={(e) => { setamount(e.target.value) }} type="text" />
            <br />
            <label >Duration</label>
            <input value={duration} onChange={(e) => { setduration(e.target.value) }} type="text" />
            <br /> <button className='btn btn-success' onClick={updateplans}>Update User Details</button>
        </div>
    );
}
export default UpdatePlans;
