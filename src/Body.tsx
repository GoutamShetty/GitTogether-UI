/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Body
 */

import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

interface IProps {}

const Body: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
