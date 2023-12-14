import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetStudentByIdQuery, useUpdateStudentMutation } from '../redux/services/studentsApi';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Detail = () => {
  const { id } = useParams();
  const { data,  error } = useGetStudentByIdQuery(id);

  // console.log("data", data);

  // if (error) {
  //   // Handle error case
  //   return <div>Error loading student details</div>;
  // }

  // if (!data) {
  //   // Handle loading state
  //   return <div>Loading...</div>;
  // }

    // Handle error case
    if (error) {
      return <div>Error loading student details</div>;
    }
  
    // Handle loading state
    if (!data) {
      return <Skeleton count={10} />;
    }

  return (
    <>
      <div className="card" style={{background:'#88304E',border:'none'}}>
        <div className="card-header">
          <h3 className='text-center'>Student Contact Detail</h3>
        </div>
        <div className="container bg-app">
          <div className="row pt-3">
            <div className="col-6">
              <div className="overlay ">
              <img className='w-50 h-30' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                  alt=""  /> 
                </div>
            </div>
            <div className="col-6 ">
              <div className='pt-3'>
              <strong>ID:</strong>
              <span className=''>{data._id ||<Skeleton/>}</span> {/* Access _id directly */}
              </div>
            
            <div className='pt-3'>
            <strong>Class:</strong>
              <span className=''>{data.addclass ||<Skeleton/>}</span>
             
            </div>
             
             <div className='pt-3'>
             <strong>Section:</strong>
              <span className=''>{data.addsection ||<Skeleton/>}</span>
             </div>
              
              <div className='pt-3'>
              <strong>Group:</strong>
              <span className=''>{data.addgroup ||<Skeleton/>}</span>
              </div>
          
              <div className='pt-3'>
              <strong>Date:</strong>
              <span className=''>{data.admissiondate ||<Skeleton/>}</span>
                </div>             
             
              
            </div>
          </div>

          <div className="row">
            <div className="col-6">
            <strong>Admission Number:</strong>
              <span className=''>{data.admissionnumber ||<Skeleton/>}</span>
             
             
            </div>
            <div className="col-6">
            <strong>Student Name:</strong>
              <span className=''>{data.studentname ||<Skeleton/>}</span>
             
            
            </div>
            <div className="col-6">
            <strong className='text-danger'>Father Name:</strong>
            <span className=''>{data.addclass ||<Skeleton/>}</span>
            
             
            </div>
            <div className="col-6">
            <strong>Date of Birth:</strong>
              <span className=''>{data.birthdate ||<Skeleton/>}</span>
             
             
            </div>
            <div className="col-6">
            <strong>Roll Number:</strong>
              <span className=''>{data.rollnumber ||<Skeleton/>}</span>
             
             
            </div>
            <div className="col-6">
            <strong>Student Category:</strong>
              <span className=''>{data.studentcategory ||<Skeleton/>}</span>
              
              
            </div>
            <div className="col-6">
            <strong>Religion:</strong>
              <span className=''>{data.religion ||<Skeleton/>}</span>
            
              
            </div>
            <div className="col-6">
            <strong>Gender:</strong>
              <span className=''>{data.gender ||<Skeleton/>}</span>
            
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
