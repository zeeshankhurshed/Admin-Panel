// import { useFormik } from "formik";
// import React from "react";
// import { NavLink } from "react-router-dom";
// import * as Yup from "yup";
// import { useAddNewStudentMutation } from "../redux/features/student/studentsApi";


// const NewRegistration = ({ openForm }) => {

// const[addStudent, isloading]=useAddNewStudentMutation();
//   const {
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     values,
//     touched,
//     errors,
//     setFieldValue,
//   } = useFormik({
//     initialValues: {
//        addclass: "",
//       addsection: "",
//       addgroup: "",
//       admissiondate:'',
//       // admissionnumber:'',
//       // studentname: "",
//       // fathername:'',
//       // birthdate:'',
//       // rollnumber:'',
//       // studentcategory:'',
//       // religion:'',
//       //  gender: "",
//       //  bloodgroup:'',
//       //  feedate:'',
//       //  familynumber:'',
//       //  description:'',
//       //  feepackage:'',
//       image: '', 
//       // fname:'',
//       // fcinic:'',
//       // fmobile:'',
//       // moboperator:'',
//       // whatsapp:'',
//       // occupation:'',
//       // email:'',
//       // mothername:'',
//       // mcinic:'',
//       // mothermob:'',
//       // motermoboper:'',
//       // mwhatsapp:'',
//       // memail:'',
//       // stadres:'',
//       // country:'',
//       // permanent:'',
//       // hland:'',
//       // ibd:'',
//       // cityregin:'',
//       // city:'',
//       // region:'',
//       // // checkbox: '',
//       // gname:'',
//       // gcinic:'',
//       // gmob:'',
//       // gmobopt:'',
//       // gwhatsapp:'',
//       // gemail:'',
//     },
//     validationSchema: Yup.object().shape({
//        addclass: Yup.string().required("*"),
//        addsection: Yup.string().required("*"),
//        addgroup: Yup.string().required("*"),
//        admissiondate:Yup.date().required("*"),
//       //  admissionnumber:Yup.number().required("*"),
//       // studentname: Yup.string().required("*"),
//       // fathername: Yup.string().required("*"),
//       // birthdate:Yup.date().required("*"),
//       // rollnumber:Yup.number().required("*"),
//       // studentcategory: Yup.string().required("*"),
//       // religion: Yup.string().required("*"),
//       // gender: Yup.string().required("*"),
//       // bloodgroup: Yup.string().required("*"),
//       // feedate: Yup.date().required("*"),
//       // familynumber:Yup.number().required("*"),
//       // description:Yup.string().required("*"),
//       // feepackage:Yup.string().required("*"),
//        image: Yup.string().required("*"),
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
//     }),
//     onSubmit: (values) => {
//     // addStudent("Form submitted with values:", values).unwrap();
//     addStudent(values).unwrap();
//     // console.log(values);
//     },
//   });

//   return (
//     <div className="registrationForm">
//       <div className="registrationForm-inner">
//         <NavLink
//           className="text-decoration-none d-flex justify-content-end align-items-center mt-5 me-2 mb-2"
//           to="#"
//         >
//           <i className="fa fa-play-circle fs-1 pt-2" aria-hidden="true"></i>
//           <span className="">New Registration Guide</span>
//         </NavLink>
//         <ul className="list-unstyled d-flex justify-content-between align-items-center m-0 px-4 bg-primary py-3">
//           <li>
//             <NavLink className="text-decoration-none fs-4 fw-bold text-white" to="#">
//               BASIC INFO
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="text-decoration-none btn btn-danger text-white fw-light"
//               style={{ fontSize: "small" }}
//               to="#"
//             >
//               PRINT BLANK FORM
//             </NavLink>
//           </li>
//         </ul>

//         <form name="additem" onSubmit={handleSubmit}>

//           <div className="row justify-content-between mx-1 mt-3">
//             <div className="col-md-3">
//               <div className="d-flex justify-content-between align-items-center">
//                 <label htmlFor="category" className="fw-bold text-muted" style={{ fontSize: "small" }}>
//                   CLASS
//                   <span className="error" style={{ color: "red" }}>
//                     {touched.category && errors.category ? errors.category : ""}
//                   </span>
//                 </label>
//                 <NavLink
//                   className="text-decoration-none btn btn-primary text-white"
//                   style={{ fontSize: "small" }}
//                 >
//                   <i className="fa fa-plus" aria-hidden="true"></i>
//                   <span style={{ fontSize: "x-small" }}>Add Class</span>
//                 </NavLink>
//               </div>
   
//               <select
//                 id="addclass"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 name="addclass"
//                 className="form-select text-muted"
//                 style={{ fontSize: "small" }}
//               >
//                 <option value="abc" >
//                   Select Class
//                 </option>
//                 <option value={"Montessori"}>Montessori</option>
//                 <option value={"Nursery"}>Nursery</option>
//                 <option value={"Prep"}>Prep</option>
//                 <option value={"One"}>One</option>
//                 <option value={"Two"}>Two</option>
//                 <option value={"Three"}>Three</option>
//                 <option value={"Four"}>Four</option>
//                 <option value={"Five"}>Five</option>
//                 <option value={"Six"}>Six</option>
//                 <option value={"Seven"}>Seven</option>
//                 <option value={"Eight"}>Eight</option>
//                 <option value={"Nine"}>Nine</option>
//                 <option value={"Ten"}>Ten</option>
//               </select>
//             </div>

//             <div className="col-md-3">
//               <div className="d-flex justify-content-between align-items-center">
//                 <label
//                   htmlFor="category"
//                   className="fw-bold text-muted"
//                   style={{ fontSize: "small" }}
//                 >
//                   SECTION
//                   <span className="error" style={{ color: "red" }}>
//                     {touched.category && errors.category ? errors.category : ""}
//                   </span>
//                 </label>
//                 <NavLink
//                   className="text-decoration-none btn btn-primary text-white"
//                   style={{ fontSize: "small" }}
//                 >
//                   <i className="fa fa-plus" aria-hidden="true"></i>
//                   <span style={{ fontSize: "x-small" }}>Add Section</span>
//                 </NavLink>
//               </div>
//               <select
//                 id="addsection"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 name="addsection"
//                 className="form-select text-muted"
//                 style={{ fontSize: "small" }}
//               >
//                 <option value="abc" >
//                   Select Section
//                 </option>
//                 <option value={"Section A"}>Section A</option>
//                 <option value={"Section B"}>Section B</option>
//                 <option value={"Section C"}>Section C</option>
//                 <option value={"Section D"}>Section D</option>
//               </select>
//             </div>

//             <div className="col-md-3">
//               <div className="d-flex justify-content-between align-items-center">
//                 <label
//                   htmlFor="group"
//                   className="fw-bold text-muted"
//                   style={{ fontSize: "small" }}
//                 >
//                   GROUP
//                   <span className="error" style={{ color: "red" }}>
//                     {touched.category && errors.category ? errors.category : ""}
//                   </span>
//                 </label>
//                 <NavLink
//                   className="text-decoration-none btn btn-primary text-white"
//                   style={{ fontSize: "small" }}
//                 >
//                   <i className="fa fa-plus" aria-hidden="true"></i>
//                   <span style={{ fontSize: "x-small" }}>Add Group</span>
//                 </NavLink>
//               </div>
//               <select
//                 id="addgroup"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 name="addgroup"
//                 className="form-select text-muted"
//                 style={{ fontSize: "small" }}
//               >
//                 <option value="abc"  >
//                   Select Group
//                 </option>
//                 <option value={'Group A'}>Group A</option>
//                 <option value={'Group B'}>Group B</option>
//                 <option value={'Group C'}>Group C</option>
//                 <option value={'Group D'}>Group C</option>
//               </select>
//             </div>

//             <div className="col-md-3">
//               <label
//                 htmlFor="date"
//                 className="mb-2 text-muted fw-bold"
//                 style={{ fontSize: "small" }}
//               >
//                 ADMISSION DATE
//                 <span className="error" style={{ color: "red" }}>
//                   {touched.date && errors.date ? errors.date : ""}
//                 </span>
//               </label>
//               <input
//                 type="date"
//                 id="admissiondate"
//                 className="form-control text-muted"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 name="admissiondate"
//                 style={{ fontSize: "small" }}
//               />
//             </div>
//           </div>

        //   {/* <div className="row justify-content-between mx-1 mt-3">
        //     <div className="col-md-3">
        //       <label
        //         htmlFor="admissionnumber"
        //         className="fw-bold text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         ADMISSION NUMBER
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         style={{ fontSize: "small" }}
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="admissionnumber"
        //         placeholder="Admission No"
        //         id="admissionnumber"
        //       />
        //     </div>

        //     <div className="col-md-3">
        //       <label
        //         htmlFor="studentname"
        //         className="fw-bold text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         STUDENT NAME
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         style={{ fontSize: "small" }}
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="studentname"
        //         placeholder="Student Name"
        //         id="studentname"
        //       />
        //     </div> 

        //      <div className="col-md-3">
        //       <label
        //         htmlFor="fathername"
        //         className="fw-bold text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         FATHER NAME
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="fathername"
        //         placeholder="Father Name"
        //         id="fathername"
        //         style={{ fontSize: "small" }}
        //       />
        //     </div> 

        //      <div className="col-md-3">
        //       <label
        //         htmlFor="birthdate"
        //         className="mb-2 text-muted fw-bold"
        //         style={{ fontSize: "small" }}
        //       >
        //         DATE OF BIRTH
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.date && errors.date ? errors.date : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="date"
        //         className="form-control text-muted"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="birthdate"
        //         id="birthdate"
        //         style={{ fontSize: "small" }}
        //       />
        //     </div> 
        //   </div>

        //   <div className="row justify-content-between mx-1 mt-3">
        //     <div className="col-md-3">
        //       <label
        //         htmlFor="rollnumber"
        //         className="fw-bold text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         ROLL NUMBER
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         style={{ fontSize: "small" }}
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="rollnumber"
        //         placeholder="Roll Number"
        //         id="rollnumber"
        //       />
        //     </div>

        //     <div className="col-md-3">
        //       <div className="d-flex justify-content-between align-items-center">
        //         <label
        //           htmlFor="studentcategory"
        //           className="fw-bold text-muted"
        //           style={{ fontSize: "small" }}
        //         >
        //           STUDENT CATEGORY
        //           <span className="error" style={{ color: "red" }}>
        //             {touched.name && errors.name ? errors.name : ""}
        //           </span>
        //         </label>
        //         <NavLink
        //           className="text-decoration-none btn btn-primary text-white"
        //           style={{ fontSize: "small" }}
        //         >
        //           <i className="fa fa-plus" aria-hidden="true"></i>
        //           <span style={{ fontSize: "x-small" }}>Add Student Category</span>
        //         </NavLink>
        //       </div>
        //       <select
        //         id="studentcategory"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="studentcategory"
        //         className="form-select text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         <option value="abc"  >
        //           Default
        //         </option>
        //         <option value={'Category'}>Category 1</option>
        //       </select>
        //     </div>

        //     <div className="col-md-3">
        //       <label htmlFor="religion" className="fw-bold text-muted">
        //         RELIGION
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <select
        //         id="religion"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="religion"
        //         className="form-select text-muted"
        //         style={{ fontSize: "small" }}>
        //         <option value="" >.....</option>
        //         <option value="Islam" >Islam</option>
        //         <option value={'Non-Muslim'}>Non-Muslim</option>
        //       </select>
        //     </div> 

        //      <div className="col-md-3">
        //       <label htmlFor="gender" className="mb-2 text-muted fw-bold">
        //         GENDER
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.gender && errors.gender ? errors.gender : ""}
        //         </span>
        //       </label>
        //       <select
        //         id="gender"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="gender"
        //         className="form-select text-muted"
        //         style={{ fontSize: "small" }}>
        //         <option value="" >.....</option>
        //         <option value="Male" >Male</option>
        //         <option value={'Female'}>Female</option>
        //       </select>
        //     </div> 
        //   </div>

        //   <div className="row justify-content-between mx-1 mt-3">
        //     <div className="col-md-3">
        //       <label htmlFor="bloodgroup" className="fw-bold text-muted">
        //         BLOOD GROUP
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         style={{ fontSize: "small" }}
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="bloodgroup"
        //         placeholder="NA"
        //         id="bloodgroup"
        //       />
        //     </div>

        //     <div className="col-md-3">
        //       <label htmlFor="feedate" className="fw-bold text-muted">
        //         ADMISSION EFFECTIVE DATE
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.date && errors.date ? errors.date : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="date"
        //         className="form-control"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //          name="feedate"
        //         id="feedate"
        //         style={{ fontSize: "small" }}
        //       />
        //     </div>

        //     <div className="col-md-3">
        //       <label htmlFor="familynumber" className="fw-bold text-muted">
        //         FAMILY NUMBER
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.name && errors.name ? errors.name : ""}
        //         </span>
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         style={{ fontSize: "small" }}
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="familynumber"
        //         placeholder="Family Number"
        //         id="familynumber"
        //       />
        //     </div>

        //     <div className="col-md-3">
        //       <label htmlFor="description" className="mb-2 text-muted fw-bold">
        //         HOBBIES
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.description && errors.description ? errors.description : ""}
        //         </span>
        //       </label>
        //       <textarea
        //         className="form-control"
        //         id="description"
        //         rows="2"
        //        onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="description"
        //       ></textarea>
        //     </div>
        //   </div>

        //   <div className="row justify-content-between mx-1">
        //     <div className="col-md-3">
        //       <label htmlFor="feepackage" className="fw-bold text-muted">
        //         FEE PACKAGE
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.price && errors.price ? errors.price : ""}
        //         </span>
        //       </label>
        //       <select
        //         id="feepackage"
        //         onChange={handleChange}
        //         onBlur={handleBlur}
        //         name="feepackage"
        //        className="form-select text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         <option value="Select">Select Fee Package</option>
        //         <option value={'Package'}>Package 1</option>
        //       </select>
        //     </div>
        //   </div> */}

        //   <div className="row justify-content-between mx-1 mt-3">
        //     <div className="col-md-3">
        //       <label
        //         htmlFor="image"
        //         className="fw-bold text-muted"
        //         style={{ fontSize: "small" }}
        //       >
        //         Student Picture
        //         <span className="error" style={{ color: "red" }}>
        //           {touched.image && errors.image ? errors.image : ""}
        //         </span>
        //       </label>

        //       <input type="file" className="form-control" onChange={(event) => {
        //       const reader = new FileReader();
        //       reader.onload = () => {
        //         if (reader.readyState === 2)
        //           setFieldValue("image", reader.result);
        //       };
        //       reader.readAsDataURL(event.currentTarget.files[0]);
        //     }}
        //     name="image" placeholder="image" />
        // {touched.image && errors.image && (
        //   <div className="invalid-feedback">{errors.image}</div>
        // )}
        //       <div className="d-flex">
        //         <button className="btn btn-outline-dark" style={{ fontSize: "small" }}>
        //           Remove
        //         </button>
              
        //       </div>
        //     </div>
        //   </div>


// {/* <section className="guardian my-3">
//             <h5 className="text-decoration-none fs-6 fw-bold text-white bg-primary p-3">
//               GUARDIAN
//             </h5>
//             <div className="row m-0">
//               <div className="col-md-4 p-0">
//                 <h6 className="my-2 text-center present py-2 text-white bg-primary">
//                   Father
//                 </h6>
//                 <div className="row m-0">
//                   <div className="col-md-6 ">
//                     <label
//                       htmlFor="fname"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       FATHER NAME<span className="error " style={{ color: "red" }}>
//                   {touched.fname && errors.fname ? errors.fname : ""}</span> 
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="Father Name"
//                       id="fname" 
//                       name="fname"
//                       style={{ fontSize: "small" }}
//                     />
                   
//                   </div>
//                    <div className="col-md-6">
//                     <label
//                       htmlFor="fcinic"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       FATHER CINIC<span className="error " style={{ color: "red" }}>
//                   {touched.fcinic && errors.fcinic ? errors.fcinic : ""}</span> 
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="xxxxx-xxxxxxx-x"
//                       id="fcinic" name="fcinic"
//                       style={{ fontSize: "small" }}
//                     />
                  
//                   </div> 
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="fmobile"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       MOBILE NUMBER<span className="error " style={{ color: "red" }}>
//                   {touched.fmobile && errors.fmobile ? errors.fmobile : ""}</span> 
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="eg923455157386"
//                       id="fmobile" name="fmobile"
//                       style={{ fontSize: "small" }}
//                     />
                  
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="moboperator"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       MOBILE OPERATOR<span className="error " style={{ color: "red" }}>
//                   {touched.moboperator && errors.moboperator ? errors.moboperator : ""}</span> 
//                     </label>
//                     <select
//                       id="moboperator"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="moboperator" 
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="" >...</option>
//                       <option value="JAZZ" >JAZZ</option>
//                       <option value='ZONG'>ZONG</option>
//                       <option value='TELENOR'>TELENOR</option>
//                     </select>
                   
//                   </div>
//                   <div className="col-md-6">
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR COMMUNICATION
//                 </label>
//                 </div>
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR SMS
//                 </label>
//                 </div>
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR WHATSAPP
//                 </label>
//                 </div>
//                   </div>

//                   <div className="col-md-6 ">
//                     <label
//                       htmlFor="whatsapp"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       WHATSAPP NUMBER<span className="error " style={{ color: "red" }}>
//                   {touched.whatsapp && errors.whatsapp ? errors.whatsapp : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="WHATSAPP NUMBER"
//                       id="whatsapp" name="whatsapp"
//                       style={{ fontSize: "small" }}
//                     />
                 
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="occupation"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       FATHER OCCUPATION <span className="error " style={{ color: "red" }}>
//                   {touched.occupation && errors.occupation ? errors.occupation : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="FATHER OCCUPATION"
//                       id="occupation" name="occupation"
//                       style={{ fontSize: "small" }}
//                     />
                  
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="email"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       EMAIL ADDRESS<span className="error " style={{ color: "red" }}>
//                   {touched.email && errors.email ? errors.email : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="abc@example.com"
//                       id="email" name="email"
//                       style={{ fontSize: "small" }}
//                     />
                    
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4 p-0">
//                 <h6 className="my-2 text-center present py-2 text-white">
//                   Mother
//                 </h6>

//                 <div className="row m-0">
//                   <div className="col-md-6 ">
//                     <label
//                       htmlFor="mothername"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       MOTHER NAME<span className="error " style={{ color: "red" }}>
//                   {touched.mothername && errors.mothername ? errors.mothername : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="Mother Name"
//                       id="mothername" name="mothername"
//                       style={{ fontSize: "small" }}
//                     />
                    
//                   </div>
//                   <div className="col-md-6 ">
//                     <label
//                       htmlFor="mcinic"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       MOTHER CINIC<span className="error " style={{ color: "red" }}>
//                   {touched.mcinic && errors.mcinic ? errors.mcinic : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="xxxxx-xxxxxxx-x"
//                       id="mcinic" name="mcinic"
//                       style={{ fontSize: "small" }}
//                     />
                  
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="mothermob"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       MOBILE NUMBER<span className="error " style={{ color: "red" }}>
//                   {touched.mothermob && errors.mothermob ? errors.mothermob : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="eg923455157386"
//                       id="mothermob" name="mothermob"
//                       style={{ fontSize: "small" }}
//                     />
                  
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="motermoboper"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       MOBILE OPERATOR<span className="error " style={{ color: "red" }}>
//                   {touched.motermoboper && errors.motermoboper ? errors.motermoboper : ""}</span>
//                     </label>
//                     <select
//                       id="motermoboper"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="motermoboper" 
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="" >...</option>
//                       <option value="JAZZ" >JAZZ</option>
//                       <option value='ZONG'>ZONG</option>
//                       <option value='TELENOR'>TELENOR</option>
//                     </select>
                   
//                   </div>

//                   <div className="col-md-6">
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR COMMUNICATION
//                 </label>
//                 </div>
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR SMS
//                 </label>
//                 </div>
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR WHATSAPP
//                 </label>
//                 </div>
//                   </div>

//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="mwhatsapp"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       WHATSAPP NUMBER<span className="error " style={{ color: "red" }}>
//                   {touched.mwhatsapp && errors.mwhatsapp ? errors.mwhatsapp : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="WHATSAPP NUMBER"
//                       id="mwhatsapp" name="mwhatsapp"
//                       style={{ fontSize: "small" }}
//                     />
                 
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="memail"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       EMAIL ADDRESS<span className="error " style={{ color: "red" }}>
//                   {touched.memail && errors.memail ? errors.memail : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="abc@example.com"
//                       id="memail" name="memail"
//                       style={{ fontSize: "small" }}
//                     />
                    
//                   </div>
//                 </div>
                
//               </div>
//               <div className="col-md-4 p-0">
//                 <h6 className="my-2 text-center present py-2 text-white">
//                   Guardian
//                 </h6>
//                 <div className="row m-0">
//                   <div className="col-md-6 ">
//                     <label
//                       htmlFor="gname"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       GUARDIAN NAME<span className="error " style={{ color: "red" }}>
//                   {touched.gname && errors.gname ? errors.gname : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="Mother Name"
//                       id="gname" name="gname"
//                       style={{ fontSize: "small" }}
//                     />
                   
//                   </div>
//                   <div className="col-md-6 ">
//                     <label
//                       htmlFor="gcinic"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       GUARDIAN CINIC<span className="error " style={{ color: "red" }}>
//                   {touched.gcinic && errors.gcinic ? errors.gcinic : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="xxxxx-xxxxxxx-x"
//                       id="gcinic" name="gcinic"
//                       style={{ fontSize: "small" }}
//                     />
                    
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="gmob"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       MOBILE NUMBER<span className="error " style={{ color: "red" }}>
//                   {touched.gmob && errors.gmob ? errors.gmob : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="eg923455157386"
//                       id="gmob" name="gmob"
//                       style={{ fontSize: "small" }}
//                     />
                   
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="gmobopt"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       MOBILE OPERATOR<span className="error " style={{ color: "red" }}>
//                   {touched.gmobopt && errors.gmobopt ? errors.gmobopt : ""}</span>
//                     </label>
//                     <select
//                       id="gmobopt"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="gmobopt"
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="" >....</option>
//                       <option value="JAZZ" >JAZZ</option>
//                       <option value="TELENOR" >TELENOR</option>
//                       <option value="ZONG" >ZONG</option>
                      
//                     </select>
                    
//                   </div>

//                   <div className="col-md-6">
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR COMMUNICATION
//                 </label>
//                 </div>
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR SMS
//                 </label>
//                 </div>
//                   <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value={values.checkbox} onBlur={handleBlur} onChange={handleChange} id="flexCheckDefault"/>
//                 <label className="form-check-label fw-light" style={{ fontSize: "small" }} htmlFor="flexCheckDefault">
//                 FOR WHATSAPP
//                 </label>
//                 </div>
//                   </div>

//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="gwhatsapp"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       WHATSAPP NUMBER<span className="error " style={{ color: "red" }}>
//                   {touched.gwhatsapp && errors.gwhatsapp ? errors.gwhatsapp : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="WHATSAPP NUMBER"
//                       id="gwhatsapp" name="gwhatsapp"
//                       style={{ fontSize: "small" }}
//                     />
                 
//                   </div>
//                   <div className="col-md-6 my-3">
//                     <label
//                       htmlFor="gemail"
//                       className="fw-bold text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       EMAIL ADDRESS<span className="error " style={{ color: "red" }}>
//                   {touched.gemail && errors.gemail ? errors.gemail : ""}</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="abc@example.com"
//                       id="gemail" name="gemail"
//                       style={{ fontSize: "small" }}
//                     />
                   
//                   </div>
                  
//                 </div>
//               </div> 
//               </div>
//               <section className="address mt-5">
//             <h5 className="text-decoration-none fs-6 fw-bold text-white bg-primary p-3">ADDRESS</h5>
//             <div className="row m-0">
//               <div className="col-md-6 p-0">
//                 <h6 className="my-4 text-center present py-2 text-white bg-primary">Present</h6>
//                 <div className="row m-0">

//                   <div className="col-md-6">
//                     <label htmlFor="stadres" className="mb-2 text-muted fw-bold" style={{ fontSize: "small" }} >STUDENT ADDRESS<span className="error " style={{ color: "red" }}>
//                   {touched.stadres && errors.stadres ? errors.stadres : ""}</span></label>
//                   <textarea
//                     className="form-control"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
                    
//                     rows="2"
//                     name="stadres"
//                     id="stadres"
//                     placeholder="Description"
//                   ></textarea>
//                   </div>

//                   <div className="col-md-6">
//                     <label htmlFor="country" className="fw-bold text-muted " style={{ fontSize: "small" }}>COUNTRY<span className="error " style={{ color: "red" }}>
//                   {touched.country && errors.country ? errors.country : ""}</span></label>
//                     <select id="country" onChange={handleChange} onBlur={handleBlur}  name="country" className="form-select text-muted"
//                       style={{ fontSize: "small" }}>
//                       <option value="Pakistan" >Pakistan</option>
//                       <option>...</option>
//                     </select>
//                       </div>

//                 </div>
//               </div>

//               <div className="col-md-6 p-0 ">
//                 <h6 className="my-4 text-center present py-2 text-white">Permanent</h6>
//                 <div className="row m-0">
//                   <div className="col-md-6">
//                     <label htmlFor="permanent" className="mb-2 text-muted fw-bold" style={{ fontSize: "small" }} >STUDENT ADDRESS<span className="error " style={{ color: "red" }}>
//                   {touched.permanent && errors.permanent ? errors.permanent : ""}</span>   </label>
//                   <textarea
//                     className="form-control"
//                     onChange={handleChange}
//                     rows="2"
//                     name="permanent"
//                     id="permanent"
//                     placeholder="Description"
//                   ></textarea>
//                   </div>
//                   <div className="col-md-6">
//                     <label
//                       htmlFor="hland"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       COUNTRY<span className="error " style={{ color: "red" }}>
//                   {touched.hland && errors.hland ? errors.hland : ""}</span> 
//                     </label>
//                     <select
//                       id="hland"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="Pakistan">
//                         Pakistan
//                       </option>
//                       <option>...</option>
//                     </select>
                 
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="row m-0">
//               <div className="col-md-6">
//                 <div className="row m-0">
//                   <div className="col-md-6">
//                     <label htmlFor="ibd" className="fw-bold text-muted " style={{ fontSize: "small" }}>CITY<span className="error " style={{ color: "red" }}>
//                   {touched.ibd && errors.ibd ? errors.ibd : ""}</span></label>
//                     <select id="ibd" onChange={handleChange} onBlur={handleBlur}  name="ibd" className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="Islamabad" >
//                         Islamabad
//                       </option>
//                       <option>...</option>
//                     </select>
                  
//                   </div>
//                   <div className="col-md-6">
//                     <label
//                       htmlFor="cityregin"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       CITY REGION<span className="error " style={{ color: "red" }}>
//                   {touched.cityregin && errors.cityregin ? errors.cityregin : ""}</span> 
//                     </label>
//                     <select
//                       id="cityregin"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="cityregin" 
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="">
//                         Select Region
//                       </option>
//                       <option>...</option>
//                     </select>
                 
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <div className="row m-0">
//                   <div className="col-md-6">
//                     <label
//                       htmlFor="city"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       CITY<span className="error " style={{ color: "red" }}>
//                   {touched.city && errors.city ? errors.city : ""}</span> 
//                     </label>
//                     <select
//                       id="city"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="city" 
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="Islamabad" >
//                         Islamabad
//                       </option>
//                       <option>...</option>
//                     </select>
                   
//                   </div>
//                   <div className="col-md-6">
//                     <label
//                       htmlFor="region"
//                       className="fw-bold text-muted "
//                       style={{ fontSize: "small" }}
//                     >
//                       CITY REGION<span className="error " style={{ color: "red" }}>
//                   {touched.region && errors.region ? errors.region : ""}</span> 
//                     </label>
//                     <select
//                       id="region"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="region" 
//                       className="form-select text-muted"
//                       style={{ fontSize: "small" }}
//                     >
//                       <option value="" >
//                         Select Region
//                       </option>
//                       <option>...</option>
//                     </select>
                   
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
            
         
//           </section> */}

//           <div className="text-center">
//           <button className="btn btn-primary my-3" type="submit">
//           Submit
//           </button>
//             <button className="btn btn-danger mx-2"  type='button' onClick={openForm}>
//               Close Form
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewRegistration;
