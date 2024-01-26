import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ render, setRender }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="flex w-full min-h-screen flex-col justify-between">
      <Header rendered={render} />
      <main className="grow">
        <Outlet setRender={setRender} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
