import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddNewUserMutation } from '../redux/services/feeApi';

const FeeModule = () => {
cosnt [addUser]=useAddNewUserMutation();

  const validationSchema = Yup.object().shape({
    reciept: Yup.string().required("Reciept is required"),
    amount: Yup.string().required("Amount is required"),
    student: Yup.string().required("Name is required"),
    feemonth: Yup.string().required("Fee Month is required"),
    date: Yup.string().required("Date is required"),
    
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      reciept: "",
      amount: "",
      student: "",
      feemonth: "",
      date: "",
     },
    validationSchema,

    onSubmit: async (values) => {
      console.log(values);
      // try {
      //   const res = await addUser(values);
      //   res.data.message === "addUser has been created successfully"
      //     ? toast.success(res.data.message)
      //     : toast.error(res.data.message);
      // } catch (error) {
      //   toast.error(error.message || "An error occurred");
      // }
    },
  });
  return (
    <div className="container">
  <div className="row m-0 py-5">
    <div className="col-12">
   		<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">
			Add New
		</button>

    <div className='py-3 d-flex justify-content-between'>
      <span className=''>Show
      <input type="text" className='mx-1'/>{}
      Entires</span>
      <div>
        <label htmlFor="" >Search</label>
        <input type="text" className='mx-1' />
      </div>
    </div>
    <Table>

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Receipts</th>
      <th scope="col">Deposit</th>
      <th scope="col">Student</th>
      <th scope="col">Fee Month</th>
      <th scope="col">Date</th>
      <th scope="col">Next</th>
      <th scope="col">Status</th>
      <th scope="col" className='text-center'>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td className='p-0'>
      <button type="button" className="btn fw-bold text-muted" data-toggle="modal" data-target="#myModal">Edit</button>
      <button className="btn fw-bold text-muted">Delete</button>          
      <button type="button" className="btn fw-bold text-muted" data-toggle="modal" data-target="#myModal2">Add New</button>
      </td>
    </tr>
  </tbody>

</Table>
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
<ToastContainer />

  {/*-------Modal------- */}

	<div className="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
		<div className="modal-dialog" role="document">
			<div className="modal-content">

				<div className="modal-header d-flex justify-content-between">
					<h4 className="modal-title text-muted" id="myModalLabel2">Enter Fee Information</h4>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>

				<div className="modal-body">

        <form name="additem" onSubmit={handleSubmit}>
					<div className="row">
            <div className="col-md-12 py-3 ">
              <input type="text" id='reciept' name='reciept' onChange={handleChange}
                onBlur={handleBlur} placeholder='Enter Reciept' value={values.reciept} className='form-control text-muted w-100 rounded py-2' style={{ fontSize: "small" }}/>
                <p className="help-block text-danger">{errors.reciept && touched.reciept ? errors.reciept : null}</p>
            </div>
            <div className="col-md-6 py-3">
              <input type="text" id='amount' name='amount' value={values.amount} placeholder='Enter Amount' onChange={handleChange} onBlur={handleBlur} className='form-control text-muted w-100 rounded py-2' style={{ fontSize: "small" }}/> 
              <p className="help-block text-danger">{errors.amount && touched.amount ? errors.amount : null}</p>
            </div>
            <div className="col-md-6 py-3">
              <input type="text" id='student' placeholder='Student'  onChange={handleChange}
                onBlur={handleBlur} name='student' value={values.student}  className='form-control text-muted w-100 rounded py-2' style={{ fontSize: "small" }}/>
              <p className="help-block text-danger">{errors.student && touched.student ? errors.student : null}</p>
              </div>
            <div className="col-md-6 py-3">
      
            <div>
              <select
                id='feemonth'
                onChange={handleChange}
                onBlur={handleBlur}
                name='feemonth'
                value={values.feemonth}
                className="form-select text-muted w-100 py-2"
                style={{ fontSize: "small" }}
                aria-label="Select Fee Month"
              >
                <option value="" disabled selected className='text-muted'>Fee Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <p className="help-block text-danger">
                {errors.feemonth && touched.feemonth ? errors.feemonth : null}
              </p>
            </div>

            </div>
            <div className="col-md-6 py-3">
            <div>
            <input
              type="date"
              id='date'
              placeholder='date'
              onChange={handleChange}
              onBlur={handleBlur}
              name='date'
              value={values.date}
              className='form-control text-muted w-100 rounded py-2'
              style={{ fontSize: "small" }}
            />
            <p className="help-block text-danger">
              {errors.date && touched.date ? errors.date : null}
            </p>
          </div>

            </div>
            <div className="col-md-12 py-3 ">
              <button className="btn btn-primary w-100 py-2" type='submit'>Save</button>
            </div>
          </div>
          </form>

				</div>

			</div>
		</div>
	</div>
	
{/* -------modal closing------- */}

{/* ----------model left-------- */}
	<div className="modal left fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div className="modal-dialog" role="document">
			<div className="modal-content">

				<div className="modal-header">
					<h4 className="modal-title" id="myModalLabel">Left Sidebar</h4>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>

				<div className="modal-body">
					<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					</p>
				</div>

			</div>
		</div>
	</div>
  {/* -------------model-left------------- */}
    </div>
  </div>  
    </div>
    
  
  )
}

export default FeeModule
