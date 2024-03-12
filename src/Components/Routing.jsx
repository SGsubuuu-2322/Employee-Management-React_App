// import React from 'react'

import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Home from "./Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile/:id" element={<UserProfile />} />
    </Routes>
  );
};

export default Routing;
