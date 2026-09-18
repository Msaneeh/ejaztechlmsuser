import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));
import Auth from "./pages/Auth.jsx";
import DashBord from "./pages/DashBord.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LeaderBord from "./pages/LeaderBord.jsx";
import Notification from "./pages/Notification.jsx";
import Phase from "./pages/Phase.jsx"; 
import Certificates from "./pages/Certificates.jsx";
import Task from "./pages/Task.jsx";
import Quizes from "./pages/Quizes.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />

        {/* Everything nested here requires login */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashbord" element={<DashBord />} />
            <Route path="/phases" element={<Phase />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/quizzes" element={<Quizes />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/leaderbord" element={<LeaderBord />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;