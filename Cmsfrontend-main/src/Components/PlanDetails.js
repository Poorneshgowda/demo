import axios from 'axios';
import React, { useState } from 'react';
import './ClaimDetails.css';
import { useNavigate } from 'react-router-dom';



function PlanDetails() {

    const navigate = useNavigate();
    const [plan, setplan] = useState([])
    const getplan = () => {
        axios.get("http://localhost:4094/api/Plan").then(
            (response) => {
                console.log(response);
                setplan(response.data)
            }
        )

    }
  

    
    return (
        <div >{

            plan.map(value => {
                return (
                    <div className='boxed'>
                        <ul>
                            <li>Plan Id={value.pId}</li>
                            <li>Plan Name={value.pName}</li>
                            <li>plan Amount={value.amount}</li>
                            <li>Plan Duration={value.duration}</li>
                        <button onClick={() => navigate('/Addplan')} >Select</button>
                        </ul>


                    </div>
                )
            })
        }
            <div className='bla'>
                <button onClick={() => navigate('/')} className='btn btn-success'>Logout</button>
            </div>

            <button className='btn btn success' onClick={getplan}> GetAllPlans
            </button>
        </div >


    );
}

export default PlanDetails;