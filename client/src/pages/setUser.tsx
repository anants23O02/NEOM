import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useEffect } from "react";

export const SetUser: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/auth/google/user", {
        credentials: "include",
      });
      const data = await res.json();
      dispatch(login(data));
      console.log("thsi", data);
      window.location.href = "/fetch";
    };
    checkAuth();
  }, [dispatch]);
  return (
<>
<div style={{margin:"auto"}} >
  Logging In.....
</div>
</>
  );
};
