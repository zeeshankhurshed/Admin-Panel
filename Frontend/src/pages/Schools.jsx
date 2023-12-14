import { Table } from "react-bootstrap";
import {
  useDeleteStudentMutation,
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
} from "../redux/services/studentsApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Schools = () => {
  const { isLoading, data, error, isFetching, isSuccess } =
    useGetAllStudentsQuery(); 
  const [deleteStudent] = useDeleteStudentMutation();


  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = data && data.filter((item) => {
    const { id, Student, Father, Class, RollNo, addclass, addsection, addgroup, admissiondate } = item || {};
    const query = searchQuery.toLowerCase();
  
    return (
      (id && id.toString().includes(query)) ||
      (Student && Student.toLowerCase().includes(query)) ||
      (Father && Father.toLowerCase().includes(query)) ||
      (Class && Class.toLowerCase().includes(query)) ||
      (RollNo && RollNo.toString().toLowerCase().includes(query)) ||
      (addclass && addclass.toLowerCase().includes(query)) ||
      (addsection && addsection.toLowerCase().includes(query)) ||
      (addgroup && addgroup.toLowerCase().includes(query)) ||
      (admissiondate && admissiondate.toLowerCase().includes(query))
    );
  });
  
  
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // useEffect(() => {
  //   if (error) {
  //     toast.error("something went wrong");
  //   }
  // }, [error]);
  // if (isLoading) {
  //   return <h3>Loading......</h3>;
  // }
  const handleDelete = async (id) => {
    try {
      const res = await deleteStudent(id);
      console.log(res);
      // Assuming a successful deletion, show success toast
      toast.success('Student deleted successfully');
    } catch (error) {
      // Handle error and show error toast
      console.error('Error deleting student:', error);
      toast.error('Error deleting student');
    }
  };
  
  

  return (
    <div className="bg-app">
    <div className="mb-3 text-center ">
    <label htmlFor="search" className="form-label fw-bold ">Search Students:</label>
    <input
      type="text"
      id="search"
      className="form-control  w-50 mx-auto text-center "
      placeholder="Enter search query"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
    <div className="">
      <Table>
        <thead>
          <tr className="fw-bold ">
            <td>Serial No.</td>
            <td>Class</td>
            <td>Section</td>
            <td>Group</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
  {filteredStudents && filteredStudents.length > 0 ? (
    filteredStudents.map((item, index) => (
      <tr key={item._id}>
        <td>{index + 1 || <Skeleton />}</td>
        <td>{item.addclass || <Skeleton />}</td>
        <td>{item.addsection || <Skeleton />}</td>
        <td>{item.addgroup || <Skeleton />}</td>
        <td>{item.admissiondate || <Skeleton />}</td>
        <td>
          <Link to={`/addedit/${item._id}`}>
            <button className="btn btn-edit">Edit</button>
          </Link>
          <button
            className="btn btn-delete"
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
          <Link to={`/detail/${item._id}`} className="btn btn-view">
            View
          </Link>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">
      <div className="loader text-center">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="bar4"></div>
    <div className="bar5"></div>
    <div className="bar6"></div>
    <div className="bar7"></div>
    <div className="bar8"></div>
    <div className="bar9"></div>
    <div className="bar10"></div>
    <div className="bar11"></div>
    <div className="bar12"></div>
</div>
      </td>
    </tr>
  )}
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
{/* Same as */}
<ToastContainer />
    </div>
    </div>
  );
};

export default Schools;
