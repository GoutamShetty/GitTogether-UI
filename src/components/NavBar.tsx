/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description NavBar
 */

import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import logo from "../assets/logo-connection.webp";

const NavBar: React.FC = () => {
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseDropdown = () => {
    (document.activeElement as HTMLElement)?.blur();
  };

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      handleCloseDropdown();
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <div className="flex items-center">
          <Link to="/" className="flex">
            <div className="avatar">
              <div className="w-16 rounded">
                <img src={logo} />
              </div>
            </div>
            <div className="ml-2 flex flex-col items-start justify-center">
              <div className="text-start text-xl text-primary p-0 font-bold">
                GitTogether
              </div>
              <div className="text-secondary">
                Where Developers Git Together
              </div>
            </div>
          </Link>
        </div>
      </div>
      {user && (
        <div className="flex items-center">
          <div className="">Welcome {user.firstName}</div>
          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={
                    user.photoUrl ??
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/profile"
                  className="justify-between"
                  onClick={handleCloseDropdown}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections" onClick={handleCloseDropdown}>
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" onClick={handleCloseDropdown}>
                  Requests
                </Link>
              </li>
              <li>
                <Link to="/premium" onClick={handleCloseDropdown}>
                  Premium
                </Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
