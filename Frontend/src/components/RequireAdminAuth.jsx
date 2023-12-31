import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const RequireAdminAuth = ({role}) => {
    const{user,token}=useSelector(state=>state.auth);
    
    if(!token || (user && role !==user.role)){
        return <Navigate to={'/auth/login'} replace={true}/>
    }


  return (
    <>
      <Outlet/>
    </>
  )
}

export default RequireAdminAuth