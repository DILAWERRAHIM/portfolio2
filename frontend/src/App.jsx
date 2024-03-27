import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared_layout from "../components/Home/shared_layout";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/skills/Skills";
import Recommendation from "../components/recommendations/recommendation";
import About from "../components/About/about";
import Add_recommendations from "../components/recommendations/add-recommendations/Add-recommendations";
import Hire_me from "../components/Hireme/Hireme";
import Login from "../components/Login/Login.jsx";
import ProtectedRoute from "../components/recommendations/add-recommendations/ProtectedRoute.jsx";
import Header from "../adminPanel/Header/header.jsx";
const App = () => {
  const [user, setuser] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Shared_layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/recommendations" element={<Recommendation />} />
            <Route
              path="/add-recommendations"
              element={
                <ProtectedRoute user={user}>
                  <Add_recommendations user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/hire-me" element={<Hire_me />} />
            <Route path="/login" element={<Login setuser={setuser} />} />
          </Route>
          <Route path="/adminpanel/*" element={<Header user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
