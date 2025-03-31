import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const SignIn:React.FC = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      
      const res = await fetch("/auth/signIn", {
        credentials: "include",
      });
      const data = await res.json();
      dispatch(login(data));
      console.log("thsi", data);
      window.location.href = "/fetch";
    };
    checkAuth();
  }, [dispatch]);
    
return(
  <>
  <div
    style={{
      width:"100%",
      height:"100vh",
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      margin:"auto",
      textAlign:"center",

    }}
  >
    <CircularProgress/>

    <div style={{
      padding:"1rem"
    }} >
      Logging In...
    </div>
  </div>
</>

)

}