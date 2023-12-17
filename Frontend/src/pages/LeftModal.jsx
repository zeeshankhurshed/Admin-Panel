import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetUserByIdQuery, useUpdateUserMutation } from '../redux/services/feeApi';
import { useParams } from 'react-router-dom';



const LeftModal = () => {
  const { id } = useParams();
  // console.log('ID:', id);
    const { data, error } = useGetUserByIdQuery(id);
  // console.log(data);

  const[updateUser, { isLoading: isUpdating, isError: updateError }]=useUpdateUserMutation();
  const validationSchema = Yup.object().shape({
    reciept: Yup.string().required('Reciept is required'),
    amount: Yup.string().required('Amount is required'),
    student: Yup.string().required('Name is required'),
    feemonth: Yup.string().required('Fee Month is required'),
    date: Yup.string().required('Date is required'),
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
      reciept: '',
      amount: '',
      student: '',
      feemonth: '',
      date: '',
    },
    validationSchema,

    onSubmit: async (formValues) => {
      try {
        const res = await updateUser(formValues); // Assuming addUser is correctly imported
        console.log(res); // Check the console log for details
        res.data.message === 'Fee created successfully'
          ? toast.success(res.data.message)
          : toast.error(res.data.message);
      } catch (error) {
        console.error(error);
        toast.error(error.message || 'An error occurred');
      }
    },
  });

  useEffect(() => {
    if (data) {
      setFieldValue("reciept", data. reciept || "");
      setFieldValue("amount", data.amount || "");
      setFieldValue("student", data.student || "");
      setFieldValue("feemonth", data.feemonth || "");
      setFieldValue("date", data.date || "");
    }
  }, [data, setFieldValue]);
  return (
    <>
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
                <option value="" disabled defaultValue className='text-muted'>
                 Fee Month
                </option>
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
              value={values.date || ''}  // Set to an empty string if undefined
             className='form-control text-muted w-100 rounded py-2'
             style={{ fontSize: "small" }}
            />
            <p className="help-block text-danger">
              {errors.date && touched.date ? errors.date : null}
            </p>
          </div>

            </div>
            <div className="col-md-12 py-3 ">
              <button className="btn btn-primary w-100 py-2" type='submit'>Update</button>
            </div>
          </div>
          </form>
          <ToastContainer />
    </>
  )
}

export default LeftModal
