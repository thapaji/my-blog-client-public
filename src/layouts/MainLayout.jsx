import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
