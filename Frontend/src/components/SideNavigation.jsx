import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NewRegistration from './NewRegistration'
import { useSelector } from 'react-redux';

function SideNavigation() {
  const {user}=useSelector(state=>state.auth);
  console.log('test------',user);
  const[formOpen,setFormOpen]=useState(false);

  const openForm=()=>{
  
    if(formOpen){
      setFormOpen(false)
    }else{
      setFormOpen(true)
    }
  }
  return (
    <>
    <div className="col-lg-3 col-md-4">
                {/* <!-- Price Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Admin Dashboard</span></h5>
                <div className="bg-light p-4 mb-30">
                <div className="list-group">
                  {
                    user.role && user.role === 'admin' ?
                    <>
                    <NavLink className="nav-link text-decoration-none text-black-50 px-2 fw-bold" to={'/addcategory'} aria-current="page" >Add Category</NavLink> 
                    <NavLink className="nav-link text-decoration-none text-black-50 px-2 fw-bold" onClick={openForm} aria-current="page" >New Registration</NavLink>
                    <NavLink className="nav-link text-decoration-none text-black-50 px-2 fw-bold" to={'/checkoutstudent'} aria-current="page">CheckoutStudent</NavLink> 
                    </>:null
                     
                  }
                
                  <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
                </div>
                </div>
             
            </div>
            {
  formOpen ? <NewRegistration openForm={openForm}/> :''
}
    </>
    
  )
}

export default SideNavigation