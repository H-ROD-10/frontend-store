import React from "react";
import { MenuProduct } from "../components/buttons/MenuDashboard";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Dashboard</h1>
      <div className="mt-8">
        <MenuProduct />
      </div>
    </div>
  );
};

export default Dashboard;
