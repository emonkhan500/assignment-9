import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {
  const {user,logout }= useContext(AuthContext)
  const handleSIgnOut=()=>{
    logout()
    .then()
    .catch()
  }
  
  return (
    <div className="navbar  container  mx-auto mb-9  px-36 mt-5 ">
      <div className="flex-1">
        <img src="https://i.ibb.co/GxLbkDy/Green-Bird-Creative-Business-Logo-Design-2-removebg-preview-1-1.png" alt="" />
      </div>
      <div className=" ">
        <ul className="md:flex gap-5 smt-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/speakers"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/photo"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              PHOTO GALLERY
            </NavLink>
          </li>

          {

            user? <button onClick={handleSIgnOut} className="btn">Logout</button>: <div className="flex gap-4">  <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              REGISTER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 underline"
                  : ""
              }
            >
              LOGIN
            </NavLink>
          </li></div>
          }
         
        </ul>
      </div>
    </div>
  );
};

export default Nav;
