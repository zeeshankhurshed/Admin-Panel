import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddNewStudentMutation } from "../redux/services/studentsApi";

const NewRegistration = ({ openForm }) => {
  const { id } = useParams(); // Destructure id from useParams
  const [addStudent] = useAddNewStudentMutation();
  // const { item, data } = useGetAllStudentsQuery(id);

  // const {updateStudent}=useUpdateStudentMutation(id);

  // const {editMode,setEditMode}=useState(false);

  // const{id}=useParams();

  // useEffect(() => {
  // if(id){
  //   setEditMode(true)
  // }else{
  //   setEditMode(false)
  // }
  // }, [id,data])
  const validationSchema = Yup.object().shape({
    addclass: Yup.string().required("Class is required"),
    addsection: Yup.string().required("Section is required"),
    addgroup: Yup.string().required("Group is required"),
    admissiondate: Yup.string().required("Admission date is required"),
    //  admissionnumber: Yup.string().required("*"),
    //  studentname: Yup.string().required("*"),
    //  fathername: Yup.string().required("*"),
    //  birthdate: Yup.string().required("*"),
    //  rollnumber: Yup.string().required("*"),
    // studentcategory: Yup.string().required("*"),
    //   religion: Yup.string().required("*"),
    //  gender: Yup.string().required("*"),
    //  bloodgroup: Yup.string().required("*"),
    //  feedate: Yup.string().required("*"),
    //  familynumber: Yup.string().required("*"),
    //   description: Yup.string().required("*"),
    //    image: Yup.string().required("*"),
    //  feepackage: Yup.string().required("*"),
    //       //  fname: Yup.string().required("*"),
    //       //  fcinic:Yup.number().required("*"),
    //       //  fmobile:Yup.number().required("*"),
    //       //  moboperator:Yup.string().required("*"),
    //       //  whatsapp:Yup.number().required("*"),
    //       //  occupation:Yup.string().required("*"),
    //       //  email:Yup.string().required("*"),
    //       //  mothername:Yup.string().required("*"),
    //       //  mcinic:Yup.number().required("*"),
    //       //  mothermob:Yup.number().required("*"),
    //       //  motermoboper:Yup.string().required("*"),
    //       //  mwhatsapp:Yup.number().required("*"),
    //       //  memail:Yup.string().required("*"),
    //       //  stadres:Yup.string().required("*"),
    //       //  country:Yup.string().required("*"),
    //       //  permanent:Yup.string().required("*"),
    //       //  hland:Yup.string().required("*"),
    //       //  ibd:Yup.string().required("*"),
    //       //  cityregin:Yup.string().required("*"),
    //       //  city:Yup.string().required("*"),
    //       //  region:Yup.string().required("*"),
    //       // //  checkbox: Yup.boolean().required("*"),
    //       //  gname:Yup.string().required("*"),
    //       //  gcinic:Yup.number().required("*"),
    //       //  gmob:Yup.number().required("*"),
    //       //  gmobopt:Yup.string().required("*"),
    //       //  gwhatsapp:Yup.number().required("*"),
    //       //  gemail:Yup.string().required("*"),
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
      addclass: "",
      addsection: "",
      addgroup: "",
      admissiondate: "",
      //    admissionnumber: "",
      //    studentname: "",
      //    fathername: "",
      //    birthdate: "",
      //    rollnumber: "",
      //    studentcategory: "",
      //    religion: "",
      //    gender: "",
      //      bloodgroup: "",
      //    feedate: "",
      //      familynumber: "",
      //     description: "",
      // image: "",
      //  feepackage: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await addStudent(values);
        res.data.message === "User has been created successfully"
          ? toast.success(res.data.message)
          : toast.error(res.data.message);
      } catch (error) {
        toast.error(error.message || "An error occurred");
      }
    },
  });

  return (
    <div className="registrationForm ">
      <div className="registrationForm-inner bg-app">
        <NavLink
          className="text-decoration-none d-flex justify-content-end align-items-center mt-5 me-2 mb-2"
          to="#"
        >
          <i className="fa fa-play-circle fs-1 pt-2" aria-hidden="true"></i>
          <span className="">New Registration Guide</span>
        </NavLink>
        <ul className="list-unstyled d-flex justify-content-between align-items-center m-0 px-4 bg-primary py-3">
          <li>
            <NavLink
              className="text-decoration-none fs-4 fw-bold text-white"
              to="#"
            >
              BASIC INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-decoration-none btn btn-danger text-white fw-light"
              style={{ fontSize: "small" }}
              to="#"
            >
              PRINT BLANK FORM
            </NavLink>
          </li>
        </ul>

        <form name="additem" onSubmit={handleSubmit}>
          <div className="row justify-content-between mx-1 mt-3">
            <div className="col-md-3">
              <div className="d-flex justify-content-between align-items-center">
                <label
                  htmlFor="addclass"
                  className="fw-bold text-muted"
                  style={{ fontSize: "small" }}
                >
                  CLASS
                  <span className="error" style={{ color: "red" }}>
                    {touched.addclass && errors.addclass ? errors.addclass : ""}
                  </span>
                </label>
                <NavLink
                  className="text-decoration-none btn btn-primary text-white"
                  style={{ fontSize: "small" }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <span style={{ fontSize: "x-small" }}>Add Class</span>
                </NavLink>
              </div>

              <select
                id="addclass"
                onChange={handleChange}
                onBlur={handleBlur}
                name="addclass"
                value={values.addclass}
                className="form-select text-muted"
                style={{ fontSize: "small" }}
              >
                <option value="default">Select Class</option>
                <option value="Montessori">Montessori</option>
                <option value="Nursery">Nursery</option>
                <option value="Prep">Prep</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="Four">Four</option>
                <option value="Five">Five</option>
                <option value="Six">Six</option>
                <option value="Seven">Seven</option>
                <option value="Eight">Eight</option>
                <option value="Nine">Nine</option>
                <option value="Ten">Ten</option>
              </select>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between align-items-center">
                <label
                  htmlFor="addsection"
                  className="fw-bold text-muted"
                  style={{ fontSize: "small" }}
                >
                  SECTION
                  <span className="error" style={{ color: "red" }}>
                    {touched.addsection && errors.addsection
                      ? errors.addsection
                      : ""}
                  </span>
                </label>
                <NavLink
                  className="text-decoration-none btn btn-primary text-white"
                  style={{ fontSize: "small" }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <span style={{ fontSize: "x-small" }}>Add Section</span>
                </NavLink>
              </div>
              <select
                id="addsection"
                onChange={handleChange}
                onBlur={handleBlur}
                name="addsection"
                value={values.addsection}
                className="form-select text-muted"
                style={{ fontSize: "small" }}
              >
                <option value="" disabled>
                  Select Section
                </option>
                <option value="Section A">Section A</option>
                <option value="Section B">Section B</option>
                <option value="Section C">Section C</option>
                <option value="Section D">Section D</option>
              </select>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between align-items-center">
                <label
                  htmlFor="addgroup"
                  className="fw-bold text-muted"
                  style={{ fontSize: "small" }}
                >
                  GROUP
                  <span className="error" style={{ color: "red" }}>
                    {touched.addgroup && errors.addgroup ? errors.addgroup : ""}
                  </span>
                </label>
                <NavLink
                  className="text-decoration-none btn btn-primary text-white"
                  style={{ fontSize: "small" }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <span style={{ fontSize: "x-small" }}>Add Group</span>
                </NavLink>
              </div>
              <select
                id="addgroup"
                onChange={handleChange}
                onBlur={handleBlur}
                name="addgroup"
                value={values.addgroup}
                className="form-select text-muted"
                style={{ fontSize: "small" }}
              >
                <option value="" disabled>
                  Select Group
                </option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                <option value="Group C">Group C</option>
                <option value="Group D">Group D</option>
              </select>
            </div>

            <div className="col-md-3">
              <label
                htmlFor="admissiondate"
                className="mb-2 text-muted fw-bold"
                style={{ fontSize: "small" }}
              >
                ADMISSION DATE
                <span className="error" style={{ color: "red" }}>
                  {touched.admissiondate && errors.admissiondate
                    ? errors.admissiondate
                    : ""}
                </span>
              </label>
              <input
                type="date"
                id="admissiondate"
                className="form-control text-muted"
                onChange={handleChange}
                onBlur={handleBlur}
                name="admissiondate"
                value={values.admissiondate}
                style={{ fontSize: "small" }}
              />
            </div>

            {/* <div className="col-md-3">
              <label
                htmlFor="admissionnumber"
                className="fw-bold text-muted"
                style={{ fontSize: "small" }}
              >
                ADMISSION NUMBER
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "small" }}
                onChange={handleChange}
                onBlur={handleBlur}
                name="admissionnumber"
                placeholder="Admission No"
                id="admissionnumber"
              />
            </div>

            <div className="col-md-3">
              <label
                htmlFor="studentname"
                className="fw-bold text-muted"
                style={{ fontSize: "small" }}
              >
                STUDENT NAME
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "small" }}
                onChange={handleChange}
                onBlur={handleBlur}
                name="studentname"
                placeholder="Student Name"
                id="studentname"
              />
            </div>

            <div className="col-md-3">
              <label
                htmlFor="fathername"
                className="fw-bold text-muted"
                style={{ fontSize: "small" }}
              >
                FATHER NAME
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                name="fathername"
                placeholder="Father Name"
                id="fathername"
                style={{ fontSize: "small" }}
              />
            </div>
            <div className="col-md-3">
              <label
                htmlFor="birthdate"
                className="mb-2 text-muted fw-bold"
                style={{ fontSize: "small" }}
              >
                DATE OF BIRTH
                <span className="error" style={{ color: "red" }}>
                  {touched.date && errors.date ? errors.date : ""}
                </span>
              </label>
              <input
                type="date"
                className="form-control text-muted"
                onChange={handleChange}
                onBlur={handleBlur}
                name="birthdate"
                id="birthdate"
                style={{ fontSize: "small" }}
              />
            </div>
            <div className="col-md-3">
              <label
                htmlFor="rollnumber"
                className="fw-bold text-muted"
                style={{ fontSize: "small" }}
              >
                ROLL NUMBER
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "small" }}
                onChange={handleChange}
                onBlur={handleBlur}
                name="rollnumber"
                placeholder="Roll Number"
                id="rollnumber"
              />
            </div>

            <div className="col-md-3">
              <div className="d-flex justify-content-between align-items-center">
                <label
                  htmlFor="studentcategory"
                  className="fw-bold text-muted"
                  style={{ fontSize: "small" }}
                >
                  STUDENT CATEGORY
                  <span className="error" style={{ color: "red" }}>
                    {touched.name && errors.name ? errors.name : ""}
                  </span>
                </label>
                <NavLink
                  className="text-decoration-none btn btn-primary text-white"
                  style={{ fontSize: "small" }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <span style={{ fontSize: "x-small" }}>
                    Add Student Category
                  </span>
                </NavLink>
              </div>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "small" }}
                onChange={handleChange}
                onBlur={handleBlur}
                name="studentcategory"
                placeholder="Student Category"
                id="studentcategory"
              />
            </div>
            
            <div className="col-md-3">
              <label htmlFor="religion" className="fw-bold text-muted">
                RELIGION
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <select
                id="religion"
                onChange={handleChange}
                onBlur={handleBlur}
                name="religion"
                className="form-select text-muted"
                style={{ fontSize: "small" }}
              >
                <option value="">.....</option>
                <option value="Islam">Islam</option>
                <option value={"Non-Muslim"}>Non-Muslim</option>
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="gender" className="mb-2 text-muted fw-bold">
                GENDER
                <span className="error" style={{ color: "red" }}>
                  {touched.gender && errors.gender ? errors.gender : ""}
                </span>
              </label>
              <select
                id="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                name="gender"
                className="form-select text-muted"
                style={{ fontSize: "small" }}
              >
                <option value="">.....</option>
                <option value="Male">Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </div>
         
            <div className="col-md-3">
              <label htmlFor="bloodgroup" className="fw-bold text-muted">
                BLOOD GROUP
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "small" }}
                onChange={handleChange}
                onBlur={handleBlur}
                name="bloodgroup"
                placeholder="NA"
                id="bloodgroup"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="feedate" className="fw-bold text-muted">
                ADMISSION EFFECTIVE DATE
                <span className="error" style={{ color: "red" }}>
                  {touched.date && errors.date ? errors.date : ""}
                </span>
              </label>
              <input
                type="date"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                 name="feedate"
                id="feedate"
                style={{ fontSize: "small" }}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="familynumber" className="fw-bold text-muted">
                FAMILY NUMBER
                <span className="error" style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "small" }}
                onChange={handleChange}
                onBlur={handleBlur}
                name="familynumber"
                placeholder="Family Number"
                id="familynumber"
              />
            </div>
 
       

            <div className="col-md-3">
              <label htmlFor="description" className="mb-2 text-muted fw-bold">
                HOBBIES
                <span className="error" style={{ color: "red" }}>
                  {touched.description && errors.description ? errors.description : ""}
                </span>
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="2"
               onChange={handleChange}
                onBlur={handleBlur}
                name="description"
              ></textarea>
            </div>
        <div className="row justify-content-between mx-1 mt-3">
            <div className="col-md-3">
              <label
                htmlFor="image"
                className="fw-bold text-muted"
                style={{ fontSize: "small" }}
              >
                Student Picture
                <span className="error" style={{ color: "red" }}>
                  {touched.image && errors.image ? errors.image : ""}
                </span>
              </label>

              <input type="file" className="form-control" onChange={(event) => {
              const reader = new FileReader();
              reader.onload = () => {
                if (reader.readyState === 2)
                  setFieldValue("image", reader.result);
              };
              reader.readAsDataURL(event.currentTarget.files[0]);
            }}
            name="image" placeholder="image" />
        {touched.image && errors.image && (
          <div className="invalid-feedback">{errors.image}</div>
        )}
              <div className="d-flex">
                <button className="btn btn-outline-dark" style={{ fontSize: "small" }}>
                  Remove
                </button>
              
              </div>
            </div>
          </div>   */}
          </div>

          <div className="text-center">
            <button className="btn btn-primary my-3" type="submit">
              Submit
            </button>
            <button
              className="btn btn-danger mx-2"
              type="button"
              onClick={openForm}
            >
              Close Form
            </button>
          </div>
        </form>

        {/* <div className="row justify-content-between mx-1 mt-3">
            <div className="col-md-3">
              <label
                htmlFor="image"
                className="fw-bold text-muted"
                style={{ fontSize: "small" }}
              >
                Student Picture
                <span className="error" style={{ color: "red" }}>
                  {touched.image && errors.image ? errors.image : ""}
                </span>
              </label>

              <input type="file" className="form-control" onChange={(event) => {
              const reader = new FileReader();
              reader.onload = () => {
                if (reader.readyState === 2)
                  setFieldValue("image", reader.result);
              };
              reader.readAsDataURL(event.currentTarget.files[0]);
            }}
            name="image" placeholder="image" />
        {touched.image && errors.image && (
          <div className="invalid-feedback">{errors.image}</div>
        )}
              <div className="d-flex">
                <button className="btn btn-outline-dark" style={{ fontSize: "small" }}>
                  Remove
                </button>
              
              </div>
            </div>
          </div>  */}

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
      </div>
    </div>
  );
};

export default NewRegistration;
