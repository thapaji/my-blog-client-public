import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
