// import React from 'react'

// import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
// import Routing from "./Utils/Routing";
import { PublicRoutes } from "./Routes/PublicRoutes";
import { AuthRoutes } from "./Routes/AuthRoutes";
// import UserProfile from "./Components/UserProfile";

// import Login from "./Components/Login";
// import Register from "./Components/Register";

// import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        {PublicRoutes.map((val, i) => {
          return <Route key={i} path={val.path} element={<val.element />} />;
        })}
        {AuthRoutes.map((val, i) => {
          return <Route key={i} path={val.path} element={<val.element />} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
