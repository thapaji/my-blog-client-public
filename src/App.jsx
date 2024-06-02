import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
