import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'; 
import Oauth from './Oauth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRegisterUserMutation } from '../redux/services/authApi';

const SignUp = () => { 
const [registerUser,{isLoading,error,data}]=useRegisterUserMutation();
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      email: '', 
      password: '', 
      cpassword: '',
      
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      userName: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'), 
      cpassword: Yup.string().oneOf([Yup.ref('password'),null],'Passwords must match'),

    }),
    onSubmit: async (values) => {
        delete values.cpassword;
        console.log(values);
      
        try { 
          const res=await registerUser(values).unwrap();
          if (res.success) {
            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        } catch (error) {
          // Handle errors here
          console.error(error);
        }
      },
      
  });
  return (
    <div className="container pt-2">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center"><span className="pr-3 text-white">Create An Account</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="contact-form p-30">
                    <div id="success"></div>
                    <form name="sentMessage" onSubmit={handleSubmit} id="contactForm" noValidate="novalidate"  className=' p-5 rounded' style={{width:'30rem', height:'30rem', backgroundColor:'#311D3F'}}>
                        <div className="control-group">
                            <input type="text"  onChange={handleChange} onBlur={handleBlur}  name='fullName' className="form-control" id="fname" placeholder="Your Name"
                                required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger">{errors.fullName && touched.fullName ? errors.fullName : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="text" onChange={handleChange} onBlur={handleBlur}   name='userName' className="form-control" id="uname" placeholder="Your User Name"
                                required="required" data-validation-required-message="Please enter user name" />
                            <p className="help-block text-danger">{errors.userName && touched.userName ? errors.userName : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="email" onChange={handleChange} onBlur={handleBlur}  name='email' className="form-control" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger">{errors.email && touched.email ? errors.email : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="password" onChange={handleChange} onBlur={handleBlur}  name='password' className="form-control" id="password" placeholder="password"
                                required="required" data-validation-required-message="Please enter a password" />
                            <p className="help-block text-danger">{errors.password && touched.password ? errors.password : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="password" onChange={handleChange} onBlur={handleBlur}  name='cpassword' className="form-control" id="cpassword" placeholder="confirm password"
                                required="required" data-validation-required-message="Please enter a password again" />
                            <p className="help-block text-danger">{errors.cpassword && touched.cpassword ? errors.cpassword : null}</p>
                        </div>
                        <div>
                            {/* <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton" disabled={isLoading}>Create Account</button> */}
                            <button className="btn btn-primary py-2 px-4 text-uppercase w-100" type="submit" id="sendMessageButton" >Create Account</button>
                        </div>
                        <Oauth/>
                        <p className='text-center text-white'>Have an account? <Link className='text-decoration-none' to={'/auth/login'}>SignIn</Link></p>
                    </form>
                    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <div className="bg-light p-30 mb-30">
                   
                </div>
                <div className="bg-light p-30 mb-3">
                   
                </div>
            </div>
        </div>
    </div>
    // <div className='bg-info' style={{height:'100vh'}}>
    //   <div className="container ">
    //     <div className="row m-0 pt-5">
    //         <div className="col-12">
    //     <h2 className='py-1 text-center'>Create An Account</h2>
    //         </div>
    //     </div>
    //     <div className='text-center  '>
    //     <input className='d-block w-50 py-3 my-2 mx-auto rounded-5 ps-2' type="text" placeholder='Your Name' />
    //     <input className='d-block w-50 py-3 my-2 mx-auto rounded-5 ps-2' type="text" placeholder='Your Email' />
    //     <input className='d-block w-50 py-3 my-2 mx-auto rounded-5 ps-2' type="text" placeholder='Your Password' />
    //     <input className='d-block w-50 py-3 my-2 mx-auto rounded-5 ps-2' type="text" placeholder='Confirm Password' />
    //     <button className="btn btn-success my-2">Create Account</button>
    //  </div>
    //   </div>
    // </div>
  )
}

export default SignUp
