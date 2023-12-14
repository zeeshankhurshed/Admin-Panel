import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NewRegistration from './NewRegistration'; 
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutUserMutation } from '../redux/services/authApi'; 
import { setUserInfo } from '../redux/features/authSlice';

const Nav = () => {
  const {user,token} = useSelector(state => state.auth);
  
 


  const dispatch= useDispatch();
  const[logout,{isloading,data,error}]=useLogoutUserMutation();

  const handlelogout=async()=>{
      await logout(); 
      dispatch(setUserInfo(user));
  }

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
     <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
         {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ">
        {
          user & token ? <li className="nav-item">
          <NavLink className="nav-link text-decoration-none text-black-50 px-2 fw-bold"  aria-current="page" >New Registration</NavLink>
        </li> :null
        }
        <li className="nav-item">
          <NavLink className="nav-link text-decoration-none text-black-50 px-2 fw-bold" to={'/checkoutstudent'} aria-current="page" >CheckoutStudent</NavLink>
        </li>
       
         <li className="nav-item">
          <NavLink className="nav-link text-decoration-none text-black-50 fw-bold " aria-current="page" to={'/login'}>LogIn</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link text-decoration-none text-black-50 fw-bold " aria-current="page" to={'/signup'}>SignUp</NavLink>
        </li>   
      </ul> */}
      <div className="row m-0">   
      <div className="col-lg-6 ">
      {/* <NavLink className='text-decoration-none fs-5 ms-3 text-white' to={'/'}>Admin Panel</NavLink> */}
      <NavLink className='text-decoration-none fs-5 ms-3 text-white' to={'/'}> <img src="../img/Untitled-removebg-preview.png" alt="" style={{width:'3rem'}} /></NavLink>
      </div>
      <div className="col-lg-6 text-end text-lg-right">
                <div className="d-inline-flex align-items-center ">
                    <div className="btn-group">
                    {
                        user && token ? <>
                           <button type="button" className="btn btn-sm dropdown-toggle " data-toggle="dropdown">Hi,{user.email}</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to='/user/admin-dashboard'>Admin Dashboard</Link>
                                <Link className="dropdown-item" to='/profile'>Profile</Link>
                                <button className="dropdown-item" onClick={handlelogout}>LogOut</button>
                            </div>
                            </>:<>
                            
                            <button type="button" className="btn btn-sm  dropdown-toggle" data-toggle="dropdown">My Account</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to='/auth/login'>Sign in</Link>
                                <Link className="dropdown-item" to='/auth/register'>Sign up</Link>
                            </div>
                            </>
                    }                 
                    </div>
                                      
                </div>
        
            </div>
            </div>
            {
  formOpen ? <NewRegistration openForm={openForm}/> :''
}
    
  </div>
</nav>  
    </>
  )
}

export default Nav
