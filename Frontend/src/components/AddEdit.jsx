import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetStudentByIdQuery, useUpdateStudentMutation } from "../redux/services/studentsApi";

const AddEdit = () => {
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  // Fetch student data based on id
  const { data, isLoading, isError } = useGetStudentByIdQuery(id);

  const [updateUser, { isLoading: isUpdating, isError: updateError }] = useUpdateStudentMutation();

  // Validation schema for form fields
  const validationSchema = Yup.object().shape({
    addclass: Yup.string().required("Class is required"),
    addsection: Yup.string().required("Section is required"),
    addgroup: Yup.string().required("Group is required"),
    admissiondate: Yup.string().required("Admission date is required"),
  });

  // Formik hooks for managing form state and submission
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
      addclass: "",
      addsection: "",
      addgroup: "",
      admissiondate: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      try {
const res = await updateUser({ id, values });
console.log(res);
      } catch (error) {
        console.error("API Error:", error);
        // Handle the error based on your application's requirements
        toast.error("An error occurred");
      }
    },
  });

  // Update form values when data is available
  useEffect(() => {
    if (data) {
      setFieldValue("addclass", data.addclass || "");
      setFieldValue("addsection", data.addsection || "");
      setFieldValue("addgroup", data.addgroup || "");
      setFieldValue("admissiondate", data.admissiondate || "");
    }
  }, [data, setFieldValue]);
 
  return (
    <>
      <div className="form-wrapper mt-5">
        <div className="container">
          <form onSubmit={handleSubmit} className="">
            <div className="row">
              <div className="col-6 pb-2">
                <div style={{ display: "inline-grid" }}>
                  <label htmlFor="addclass" className="fw-bold">
                    Class
                  </label>
                  <input
                    type="text"
                    id="addclass"
                    name="addclass"
                    placeholder="Enter Class"
                    value={values.addclass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-2 form-control"
                  />
                </div>
              </div>

              <div className="col-6 pb-2">
                <div style={{ display: "inline-grid" }}>
                  <label htmlFor="addsection" className="fw-bold">
                    Section
                  </label>
                  <input
                    type="text"
                    id="addsection"
                    name="addsection"
                    placeholder="Enter Section"
                    value={values.addsection}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-2 form-control"
                  />
                </div>
              </div>

              <div className="col-6 pb-2">
                <div style={{ display: "inline-grid" }}>
                  <label htmlFor="addgroup" className="fw-bold">
                    Group
                  </label>
                  <input
                    type="text"
                    id="addgroup"
                    name="addgroup"
                    placeholder="Enter Group"
                    value={values.addgroup}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-2 form-control"
                  />
                </div>
              </div>

              <div className="col-6 pb-2">
                <div style={{ display: "inline-grid" }}>
                  <label htmlFor="admissiondate" className="fw-bold">
                    Date
                  </label>
                  <input
                    type="date"
                    id="admissiondate"
                    name="admissiondate"
                    placeholder="Enter Date"
                    value={values.admissiondate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-2 form-control"
                  />
                </div>
              </div>

              <div className="col-12 p-2">
                <input
                  type="submit"
                  value={editMode ? "Updating" : "Update"}
                  className="w-50 p-2"
                />
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddEdit;
