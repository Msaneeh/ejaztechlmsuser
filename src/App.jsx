import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));
import Auth from "./pages/Auth.jsx";
import DashBord from "./pages/DashBord.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";

function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashbord" element={<DashBord />} />
          {/* add more dashboard-only pages here, e.g.: */}
          {/* <Route path="/phases" element={<Phases />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;