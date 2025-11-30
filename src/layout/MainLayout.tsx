import React from "react";
import Navbar from "../components/footer/navbar/navbar";
import Footer from "../components/footer/footer";
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