import axios from 'axios';
import React, { useState } from 'react';
import './ClaimDetails.css';
import { useNavigate } from 'react-router-dom';



function ClaimDetails() {
    const navigate = useNavigate();
    const [claim, setclaim] = useState([])
    const getclaim = () => {
        axios.get("http://localhost:4094/api/Claim").then(
            (response) => {
                console.log(response);
                setclaim(response.data)
            }
        )

    }
    return (
        <div >{

            claim.map(value => {
                return (
                    <div className='boxed'>
                        <ul>
                            <li>ClaimId={value.cId}</li>
                            <li>Claim Amount={value.amount}</li>
                            <li>ClaimDate={value.claimDate}</li>
                        </ul>

                    </div>
                )
            })
        }
            <div className='bla'>
                <button onClick={() => navigate('/')} className='btn btn-success'>Logout</button>
            </div>

            <button className='btn btn success' onClick={getclaim}> GetAllClaims
            </button>
        </div >


    );
}

export default ClaimDetails;