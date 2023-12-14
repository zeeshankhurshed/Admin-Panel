import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiSolidDashboard} from 'react-icons/Bi'
import {PiStudentFill} from 'react-icons/Pi'
import {FaChalkboardTeacher} from 'react-icons/Fa'
import {LuSchool2} from 'react-icons/Lu'
// import {LuSchool2} from 'react-icons/Lu'
import {IoMdHelp} from 'react-icons/Io'
import {CiSettings} from 'react-icons/Ci'

const LeftNav = () => {
  return (
    <div className='shadow 'style={{height:'35rem'}}>
    <ul className='list-unstyled ps-3 pt-4 bg-leftnav' >
        {/* <li ><NavLink className='text-decoration-none fw-bold fs-3 text-white' to={'/'}>Admin Panel</NavLink> </li> */}
        <li className='py-2 '><NavLink className='text-decoration-none fs-5  text-white d-flex align-items-center'  to={'/'}>
          <BiSolidDashboard className='mr-3'/>
          Dashboard</NavLink> </li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white' to={'/students'}>
          <PiStudentFill className='mr-3'/>
          Students</NavLink> </li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white' to={'/teachers'}>
          <FaChalkboardTeacher className='mr-3'/>
          Teachers</NavLink> </li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white  d-flex align-items-center' to={'/schools'}>
         <LuSchool2 className='mr-3'/>
         Schools</NavLink></li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white' to={'/income'}> <IoMdHelp className='mr-3'/>Income</NavLink> </li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white d-flex align-items-center' to={'/help'}>
          <IoMdHelp className='mr-3'/>
          Help</NavLink></li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white d-flex align-items-center' to={'/setting'}>
          <CiSettings className='mr-3'/>
          Setting</NavLink></li>
        <li className='py-2'><NavLink className='text-decoration-none fs-5  text-white d-flex align-items-center' to={'/feemodule'}>
          <CiSettings className='mr-3'/>
          Fee-Moudule</NavLink></li>
    </ul>
     
     
     
      
     
      
      
    </div>
  )
}

export default LeftNav
