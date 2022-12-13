import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import OurStory from "../screens/ourStory/OurStory";



const ConfigRoute = () => {
  return (
    <>
       <Routes>
<Route index element={<Home />} />
<Route path="about" element={<About />} />
<Route path="contact us" element={<Contact />} />
<Route path="our story" element={<OurStory />} />
</Routes> 
    </>
  );
};

export default ConfigRoute;
