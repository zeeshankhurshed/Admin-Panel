import React from 'react';
import { chartData } from '../db/db';
import { NavLink } from 'react-router-dom';
import { AreaChart } from "keep-react";


const Dashboard = () => {
  return (
    <>
      <div className="row m-0">
   
          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Students</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/students"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                  Students
                </NavLink>
              </span>
            </div>
          </div>

          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Teachers</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/teachers"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                  Teachers
                </NavLink>
              </span>
            </div>
          </div>

          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Schools</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/schools"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                 Schools
                </NavLink>
              </span>
            </div>
          </div>

          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Income</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/income"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                 Income
                </NavLink>
              </span>
            </div>
          </div>

          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Help</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/help"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                 Help
                </NavLink>
              </span>
            </div>
          </div>

          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Setting</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/setting"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                 Setting
                </NavLink>
              </span>
            </div>
          </div>

          <div className="col-md-3 pt-5" >
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>Fee Moudule</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/feemodule"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                 Fee Module
                </NavLink>
              </span>
            </div>
          </div>

          {/* <AreaChart
      dataKey="price"
      secondaryDataKey="sell"
      showTooltip={true}
      showGridLine={true}
      showXaxis={true}
      showYaxis={true}
      chartData={chartData}
      
    /> */}
      </div>





{/* 
       <div className="row m-0 ">
        {dashboardItems.map((item, i) => (
          <div className="col-md-3 pt-5" key={i}>
            <div className="dashboard-card" >
              <strong className='fst-italic text-success'>{item.name}</strong>
              <div className="dashboard-card__body">
                Get UI elements that help you stand out.
              </div>
              <span>
                <NavLink
                  to="/schools"
                  className="text-decoration-none fw-bold fs-1 dashboard-card-heading"
                >
                  {item.name}
                </NavLink>
              </span>
            </div>
          </div>
        ))}
      </div>  */}
    </>
  );
};

export default Dashboard;
