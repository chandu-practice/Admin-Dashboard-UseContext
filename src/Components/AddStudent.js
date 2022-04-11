import React, { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../App';

function AddStudent(props) {
    let toogle = useContext(StudentContext);
    let navigate = useNavigate();

    let studentdata = useContext(StudentContext)
    let [name,setName] = useState("");
    let [degree,setDegree] = useState("");
    let [department,setDepartment] = useState("");
    let [mobile,setMobile] = useState("");
    let [email,setEmail] = useState("");
    let handlesubmit = () =>{
        let newData = [...studentdata.studentDetails,{
            name,
            degree,
            department,
            mobile,
            email
        }]
        studentdata.setStudentdetails(newData);
        // console.log(newData)
        navigate('/all-students');
        // console.log(studentdata.studentdetails)
        
    }
  return (
    <>
    <div className='p-2'>
        <button id="sidebarToggleTop" className="btn btn-link d-lg-none d-xl-none rounded-circle mr-3" onClick={toogle.toogleAction}>
                        <i className="fa fa-bars"></i>
        </button>

        <h1 style={{textAlign:"center"}}>Add Student</h1>
        <div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control"  placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>                   
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>               
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Degree</label>
                    <input type="text" className="form-control"  placeholder="Enter Degree" onChange={(e)=>setDegree(e.target.value)}/>                   
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Department</label>
                    <input type="text" className="form-control"  placeholder="Enter Department" onChange={(e)=>setDepartment(e.target.value)}/>                   
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mobile</label>
                    <input type="number" className="form-control"  placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>                   
            </div>            
            <button className="btn btn-primary" onClick={handlesubmit}>Submit</button>
        </div>
    </div>
       
    </>
  )
}

export default AddStudent