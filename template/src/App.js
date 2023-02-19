import { Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import NotFound from "./components/pages/notFound/NotFound";
import Dashboard from "./components/pages/dashboard/Dashboard";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>example title</title>
      </Helmet>
      <div className="flex justify-center">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
