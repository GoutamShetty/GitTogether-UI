/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Body
 */

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import QueryBoundary from "./QueryBoundary";

const Body: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store: any) => store.user);

  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (userData) {
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <QueryBoundary
        emptyTitle="Unable to fetch User's details"
        isLoading={loading}
      >
        <Outlet />
      </QueryBoundary>
      <Footer />
    </>
  );
};

export default Body;
