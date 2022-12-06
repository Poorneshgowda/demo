import React, { useState } from 'react';
import './SubmitClaims.css'
import { useNavigate } from 'react-router-dom';

function SubmitClaims() {
    const navigate = useNavigate();
    var [amount, setamount] = useState('');
    var [claimDate, setclaimDate] = useState('');
    var changeamount = (event) => {
        setamount(event.target.value);
    }
    var changeclaimDate = (event) => {
        setclaimDate(event.target.value);
    }
    var submitClaim = async (event) => {
        event.preventDefault();
        var claims = {
            Amount: amount,
            ClaimDate: claimDate
        };
        console.log(claims)
        var response = await fetch('http://localhost:4094/api/Claim', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(claims),
            mode: 'cors'
        });
        var data = await response
        if (response.status === 200) {
            alert("Claim Submitted")
        }
        console.log(data);
    }
    return (
        <div className='claimdiv'>
            <div>
                <h1>Submit Claims</h1>
            </div>
            <form onSubmit={submitClaim}>
                <label className='form-control'>Amount</label>
                <input className='form-control' onChange={changeamount} type="text" required />
                <label className='form-control'>ClaimDate</label>
                <input className='form-control' onChange={changeclaimDate} type="date" required />
                <button className='btn btn-success'>Submit</button>
            </form>
            <div className='bla'>
                <button onClick={() => navigate('/')} className='btn btn-success'>Logout</button>
            </div>
        </div>
    );
}


export default SubmitClaims;