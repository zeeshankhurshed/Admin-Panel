import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useGoogleUserMutation } from "../redux/services/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/features/authSlice";

const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleUser, { isLoading }] = useGoogleUserMutation();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result= await signInWithPopup(auth, provider);
      console.log('test',result);

      const userData={fullName:result.user.displayName,email:result.user.email,avatar:result.user.photoURL}
      const {data}=await googleUser(userData);
      const {user,token}=data;
      dispatch(setUserInfo({user,token} ));
      navigate("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        disabled={isLoading}
        type="button"
        onClick={handleGoogleClick}
        className="btn btn-primary border-0 my-3 text-uppercase text-white w-100 py-2"
      >
        Continue with Google
      </button>
    </>
  );
};

export default Oauth;
