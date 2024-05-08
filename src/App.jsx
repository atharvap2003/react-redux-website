import { React, useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FourOfour from "./pages/FourOfour";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useSelector, useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state)=> state.theme.isDarkMode);
  return (
    <BrowserRouter >
    <div className={isDarkMode? ' bg-darktheme text-gray-300' : "" }>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<FourOfour />} />
        </Routes>
        <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
