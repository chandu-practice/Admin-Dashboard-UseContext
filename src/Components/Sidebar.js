import React,{ useContext } from 'react'
import { StudentContext } from '../App';
import { Link } from 'react-router-dom';

function Sidebar() {
    let toogle = useContext(StudentContext);
  return (
    <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{display:toogle.tooglebtn?"":"none",height:"100%"}}>

            {/* <!-- Sidebar - Brand --> */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">                
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/all-students"><i className="fa-solid fa-address-book"></i><span>All Student</span></Link>   
                <Link className="nav-link" to="/add-student"><i className="fa-solid fa-user-plus"></i><span>Add Student</span></Link>                                
            </li>
        </ul>
    </>)
}

export default Sidebar