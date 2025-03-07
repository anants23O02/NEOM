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
      localStorage.setItem("profilePic", data.user.profilepic);
      window.location.href = "/";
    };
    checkAuth();
  }, [dispatch]);
  return <></>;
};
