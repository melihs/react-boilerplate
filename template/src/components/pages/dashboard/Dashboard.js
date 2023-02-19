import { DashboardContext } from "./DashboardContext";
import TDashboard from "../../templates/dashboard/Dashboard";

const Dashboard = () => {
  const contextData = {};

  return (
    <DashboardContext.Provider value={contextData}>
      <div className="w-full">
        <TDashboard />
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
