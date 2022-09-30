import React from "react";
import { string } from "prop-types";

import TDashboard from "../../templates/dashboard/Dashboard";

const Dashboard = ({ className = "" }) => {
  return (
    <div className={`mobile:w-full tablet:w-full ${className}`}>
      <TDashboard />
    </div>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  className: string
};
