import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer /> 
    </>
  );
};

export default MainLayout;