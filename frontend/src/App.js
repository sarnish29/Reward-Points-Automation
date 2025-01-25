import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './student/components/StudentHome';
import StudentNavBar from './student/components/StudentNavBar';
import StudentSideBar from './student/components/StudentSideBar';
import Redemption from './student/components/StudentRedemption';
import Verify1 from './student/components/StudentVerification';
import Queries from './student/components/StudentQueries';
import Home1 from './admin/components/AdminHome';
import Ratio from './admin/components/AdminRatio';
import Proceed from './admin/components/AdminProceed';
import AdminNavBar from './admin/components/AdminNavBar';
import AdminSideBar from './admin/components/AdminSideBar';
import AdminQueriesPage from './admin/components/AdminQueriesPage';
import AdminReason from './admin/components/AdminReason';

const App = () => {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: '' });

  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/" element={<Login setAuth={setAuth} />} />

        {/* Protected Route for Student Home */}
        <Route
          path="/home"
          element={
            auth.isAuthenticated && auth.role === 'student' ? (
              <>
                <StudentNavBar setAuth={setAuth} /> {/* Pass setAuth here */}
                <StudentSideBar />
                <Home />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Protected Routes for Student Pages */}
        <Route
          path="/redemption-details"
          element={
            auth.isAuthenticated && auth.role === 'student' ? (
              <>
                <StudentNavBar setAuth={setAuth} />
                <StudentSideBar />
                <Redemption />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/verified-page"
          element={
            auth.isAuthenticated && auth.role === 'student' ? (
              <>
                <StudentNavBar setAuth={setAuth} />
                <StudentSideBar />
                <Verify1 />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/queries-page"
          element={
            auth.isAuthenticated && auth.role === 'student' ? (
              <>
                <StudentNavBar setAuth={setAuth} />
                <StudentSideBar />
                <Queries />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Protected Route for Admin Home */}
        <Route
          path="/home1"
          element={
            auth.isAuthenticated && auth.role === 'admin' ? (
              <>
                <AdminNavBar setAuth={setAuth} /> {/* Pass setAuth to AdminNavBar */}
                <AdminSideBar />
                <Home1 />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/ratio-page"
          element={
            auth.isAuthenticated && auth.role === 'admin' ? (
              <>
                <AdminNavBar setAuth={setAuth} /> {/* Pass setAuth */}
                <AdminSideBar />
                <Ratio />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/proceed-page"
          element={
            auth.isAuthenticated && auth.role === 'admin' ? (
              <>
                <AdminNavBar setAuth={setAuth} /> {/* Pass setAuth */}
                <AdminSideBar />
                <Proceed />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/queries-page1"
          element={
            auth.isAuthenticated && auth.role === 'admin' ? (
              <>
                <AdminNavBar setAuth={setAuth} /> {/* Pass setAuth */}
                <AdminSideBar />
                <AdminQueriesPage />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/reason"
          element={
            auth.isAuthenticated && auth.role === 'admin' ? (
              <>
                <AdminNavBar setAuth={setAuth} /> {/* Pass setAuth */}
                <AdminSideBar />
                <AdminReason />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
