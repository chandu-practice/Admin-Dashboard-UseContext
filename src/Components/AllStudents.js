import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../App';

function AllStudents() {    
    useEffect(()=>{
        console.log("rendered")
    },[]);
    let navigate = useNavigate();
    let studentdata = useContext(StudentContext);
    let toogle = useContext(StudentContext);
    let handleDelete = (data)=>{        
        studentdata.studentDetails.splice(studentdata.studentDetails.indexOf(data),1);
        studentdata.setStudentdetails([...studentdata.studentDetails]);
    }
  return (
    <>  
        <div className='p-1'>
            <button id="sidebarToggleTop" className="btn btn-link d-lg-none d-xl-none rounded-circle mr-3" onClick={toogle.toogleAction}>
                <i className="fa fa-bars"></i>
            </button>
            <h1 style={{textAlign:"center"}}>All Student</h1>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Department</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th colSpan={2} style={{textAlign:"center"}}>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {studentdata.studentDetails.map((data,i)=>{
                        return(
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{data.name}</td>
                                <td>{data.degree}</td>
                                <td>{data.department}</td>
                                <td>{data.mobile}</td>
                                <td>{data.email}</td>
                                <td><button className='btn btn-primary' onClick={()=>{
                                    navigate('/edit-student/'+i)
                                }}>Edit</button></td>
                                <td><button className='btn btn-danger' onClick={()=>handleDelete(data)}>Delete</button></td>
                            </tr>
                        )

                    })}                
                </tbody>
            </table>
        </div>
    </>
  )
}

export default AllStudents;