import React from "react";
import { Outlet } from "react-router-dom";
// // import Sidebar from "../components/Sidebar";
// // import Header from "../components/Header";

const LayoutAdmin = () => {
  return (
    <div className="h-[90vh] overflow-y-scroll p-8">
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
