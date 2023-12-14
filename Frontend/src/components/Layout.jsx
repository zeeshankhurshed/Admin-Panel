import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import LeftNav from './LeftNav'

const Layout = () => {
  return (
    <div className='bg-app' style={{height:'38rem'}}>
      <div className="row m-0">
        <div className="col-md-12 p-0">
     <Nav/> 

        </div>
      </div>
    <div className="row m-0  " >
        <div className="col-md-2 p-0 ">
            <LeftNav />
        </div>
        <div className="col-md-10 p-0">
     <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default Layout
