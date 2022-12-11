import React from "react";
import "../css/Logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../Feature/UserSlice";
const Logout = () => {
  const dispatch = useDispatch();
  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        your submit <span className="user__name">successefly</span>
      </h1>
      <button className="logout__button" onClick={(e) => handlelogout(e)}>
        log out
      </button>
    </div>
  );
};
export default Logout;
