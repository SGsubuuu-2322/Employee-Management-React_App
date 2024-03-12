// import React from 'react'

import { Route, Routes } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Registration from "../Components/Register";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile/:id" element={<UserProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default Routing;
