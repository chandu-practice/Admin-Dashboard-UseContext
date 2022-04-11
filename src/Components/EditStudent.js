import React, { useState,useContext, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StudentContext } from '../App';

function EditStudent(props) {
    let toogle = useContext(StudentContext);
    let navigate = useNavigate();
    const params = useParams();
    useEffect(()=>{
        console.log(params);
        if(params.id){
            getData();
        }
    },[])
    let studentdata = useContext(StudentContext)
    let [name,setName] = useState("");
    let [degree,setDegree] = useState("");
    let [department,setDepartment] = useState("");
    let [mobile,setMobile] = useState("");
    let [email,setEmail] = useState("");
    let handlesubmit = () =>{        
        studentdata.studentDetails[params.id] = {
            name,
            degree,
            department,
            mobile,
            email
        };
        studentdata.setStudentdetails([...studentdata.studentDetails]);
        // console.log(newData)
        navigate('/all-students');
        // console.log(studentdata.studentdetails)        
    }

    let getData = () =>{
        let data = studentdata.studentDetails[params.id];
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setDegree(data.degree);
        setDepartment(data.department);
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
                    <input type="text" value= {name} className="form-control"  placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>                   
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value= {email} className="form-control"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>               
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Degree</label>
                    <input type="text" value= {degree}  className="form-control"  placeholder="Enter Degree" onChange={(e)=>setDegree(e.target.value)}/>                   
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Department</label>
                    <input type="text" value= {department} className="form-control"  placeholder="Enter Department" onChange={(e)=>setDepartment(e.target.value)}/>                   
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mobile</label>
                    <input type="number" value= {mobile} className="form-control"  placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>                   
            </div>            
            <button className="btn btn-primary" onClick={handlesubmit}>Submit</button>
        </div>
    </div>
       
    </>
  )
}

export default EditStudent;