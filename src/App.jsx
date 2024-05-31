import { React, useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FourOfour from "./pages/FourOfour";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useSelector, useDispatch } from "react-redux";
import ProjectInfo from "./pages/[productinfo]/ProjectInfo";

import ReactGA from 'react-ga';


const App = () => {
  const TRACKING_ID = "G-QVE65598VN";
  ReactGA.initialize(TRACKING_ID);

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[]);

  // const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  
  return (
    <BrowserRouter>
      <div className={isDarkMode ? " bg-darktheme text-gray-300" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<FourOfour />} />
          <Route path="/projects/:id" element={<ProjectInfo/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-QVE65598VN"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-QVE65598VN');
// </script>