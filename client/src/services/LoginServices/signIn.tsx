import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { useEffect } from "react";

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
    <div style={{height:"100%",padding:"auto"}} >
        User is being registered and signing In.....
    </div>
    </>

)

}