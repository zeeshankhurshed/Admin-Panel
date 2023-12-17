import "bootstrap/dist/css/bootstrap.min.css";
import {  createBrowserRouter,  createRoutesFromElements,  RouterProvider,  Route,} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Schools from "./pages/Schools";
import Income from "./pages/Income";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import FeeModule from "./pages/FeeModule";
import NewRegistration from "./components/NewRegistration";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Detail from "./components/Detail";
import AddEdit from "./components/AddEdit";
import Requireauth from "./components/Requireauth";
import CheckoutStudent from "./components/CheckoutStudent";
import RequireAdminAuth from "./components/RequireAdminAuth"; 
import { jwtDecode } from "jwt-decode"; 
import { useEffect } from "react";
import Profile from "./components/Profile";
import { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import AdminDashboard from './pages/AdminDashboard'
import AddCategory from "./pages/AddCategory";
import LeftModal from "./pages/LeftModal";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/income" element={<Income />} />
      <Route path="/help" element={<Help />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/auth/login" element={<LogIn />} />
      <Route path="/auth/register" element={<SignUp />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/addedit/:id" element={<AddEdit />} />
      <Route path="/feemodule" element={<FeeModule />} />
      <Route path="/leftmodal/:id" element={<LeftModal />} />

      <Route element={<Requireauth />}>
      <Route path="/checkoutstudent" element={<CheckoutStudent />} />

    <Route>
    <Route path="/user/admin-dashboard" element={<AdminDashboard />} />

    </Route>

      <Route element={<RequireAdminAuth role={'admin'}  />}>
        <Route path="/newregistration" element={<NewRegistration />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      </Route>

     
    </Route>
  )
);
function App() {
const {user,token}=useSelector(state=>state.auth); 
useEffect(() => {
  if(token){
    const{exp}=jwtDecode(token);
    const checkTokenValidity=()=>{
      if(exp<Date.now()/1000){
        alert('Your session has expired, Please again');
        dispatch(clearUserInfo());
      }
    };
    const interval=setInterval(checkTokenValidity,5000);
  return ()=>clearInterval(interval);
  }
  }, [token])
  return (
    <>
  <SkeletonTheme/>

      <RouterProvider router={router} />
 
    </>
  );
}

export default App;
