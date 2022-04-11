import './App.css';
import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
// import Sidecomp from './Components/Sidecomp';
export const StudentContext = React.createContext();


function App() {
  let data = {earning:"$30,0000",annual:"$3,60,000",task:"20%",pending:26};  
  let [tooglebtn,setTooglebtn] = useState(true);
  const toogleAction = useCallback(()=>{
    setTooglebtn(!tooglebtn);
  },[tooglebtn]);
  let [studentDetails,setStudentdetails] = useState([
    {
        name:"Chandu",
        degree:"B.Tech",
        department :"Geo-Engineering",
        mobile:"1234567890",
        email:"chandu@gmail.com"
    },
    {
        name:"Raj",
        degree:"B.E",
        department :"Electrical",
        mobile:"2224446578",
        email:"raj@gmail.com"
    },
    {
        name:"Sai",
        degree:"B.Sc",
        department :"Chemistry",
        mobile:"9876543211",
        email:"sai@gmail.com"
    }
]);

  return (
    <>
      <Router>
      <StudentContext.Provider value = {{studentDetails,setStudentdetails,toogleAction,tooglebtn}}>
        {/* <div style={{display:"grid",gridTemplateColumns:"18% 82%",minHeight:"100%"}} >   */}
        <div style={{display:"flex",flexDirection:"row"}}>
            <div><Sidebar/></div>
            {/* <div><Sidecomp/></div> */}
            <div style={{width:"100%"}}>
              <Routes>
                <Route path='/dashboard' element={<Dashboard values={data}/>}></Route>                
                  <Route path='/all-students' element={<AllStudents />}></Route>
                  <Route path='/add-student' element={<AddStudent />}></Route>
                  <Route path='/edit-student/:id' element={<EditStudent />}></Route>                            
                <Route path='/' element={<Dashboard values={data}/>}/>
              </Routes>
            </div>
          </div>
        </StudentContext.Provider> 
      </Router>
    </>
  );
}

export default App;
