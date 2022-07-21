import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SeekerHome from "./components/Service Seeker/SeekerHome";
import ProviderHome from "./components/Service Provider/ProviderHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/serviceseeker" element={<SeekerHome />}></Route>
        <Route path="/serviceprovider" element={<ProviderHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
