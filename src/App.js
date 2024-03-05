import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Skills from "./component/Skills.js";
import Contact from "./component/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
