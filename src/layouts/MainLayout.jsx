import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import EventList from "../Components/EventList/EventList";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
