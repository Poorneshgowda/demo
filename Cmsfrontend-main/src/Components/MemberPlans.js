import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemberPlans.css';



function MemberPlans() {
    const navigate = useNavigate();
    var Id;
    const [plans, setplans] = useState([])
    const [memberplans, setmemberplans] = useState([])
    const getplans = () => {
        var ss = sessionStorage.getItem("key")
        console.log(ss)
        if (ss === "Krantdarshi") {
            navigate("/ClaimDetails")

        }
        axios.get(`http://localhost:4094/api/Member/GetAllPlansByMember?username=${ss}`).then(
            (response) => {
                console.log(response);
                setplans(response.data)
                //console.log(response.data.memberPlans)
            }
        


        )


    }
    return (

        <div className='MP'>{

            plans.map(value => {
                Id=value.id;
                console.log(Id)
                sessionStorage.setItem("ID",Id)

                return (
                    <div>
                        {value.memberPlans.map(value2 =>

                            <ul className='boxed'>
                                <li>Member Id={value.id}</li>
                                <li>Member Username={value.userName}</li>
                                <li>Member plan Id={value2.pId}</li>
                                <li>Member plan name={value2.plan.pName}</li>
                                
                                <button onClick={() => navigate('/Claims')} className='btn btn-success'>Submit claim</button>
                            </ul>
                        )}
                            <button onClick={() => navigate('/Plans')} className='btn btn-success'>All plans</button>

                    </div>
                )


            })


        }
            <div className='bla'>
                <button onClick={() => navigate('/')} className='btn btn-success'>Logout</button>
            </div>
            <button className='btn btn success' onClick={getplans}> GetMyPlans
            </button>
            {/* <button onClick={()=>navigate('/Plans')} className='btn btn-success'>All plans</button>
             <button onClick={()=>navigate('/Claims')} className='btn btn-success'>Submit claim</button> */}
        </div>


    );

}

export default MemberPlans;