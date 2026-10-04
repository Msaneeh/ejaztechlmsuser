import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
const Auth = lazy(() => import("./pages/Auth.jsx"));
const DashBord = lazy(() => import("./pages/DashBord.jsx"));
const DashboardLayout = lazy(() => import("./Layout/DashboardLayout.jsx"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute.jsx"));
const LeaderBord = lazy(() => import("./pages/LeaderBord.jsx"));
const Notification = lazy(() => import("./pages/Notification.jsx"));
const Phase = lazy(() => import("./pages/Phase.jsx")); 
const Certificates = lazy(() => import("./pages/Certificates.jsx"));
const Task = lazy(() => import("./pages/Task.jsx"));
const Quizes = lazy(() => import("./pages/Quizes.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const TaskSubmit = lazy(() => import("./pages/TaskSubmit.jsx"));
const QuizTake = lazy(() => import("./pages/QuizTake.jsx"));
const QuizResult = lazy(() => import("./pages/QuizResult.jsx"));



function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashbord" element={<DashBord />} />
            <Route path="/phases" element={<Phase />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/quizzes" element={<Quizes />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/tasks/:taskId" element={<TaskSubmit />} />
          <Route path="/quizzes/:quizId" element={<QuizTake />} />
          <Route path="/quizzes/:quizId/result" element={<QuizResult />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderbord" element={<LeaderBord />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;