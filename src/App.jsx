import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import NotFound from "./components/NotFound";
// homepage
import SideNavbar from "./pages/Homepage/SideNavbar";
import Homepage from "./pages/Homepage/Home";
import Profile from "./pages/Homepage/Profile";
import Code from "./pages/Homepage/Codepage/CodeEditor";
import Notifications from "./pages/Homepage/Notifications";
import Settings from "./pages/Settings";
import OthersProfile from "./pages/Homepage/OthersProfile";
import Searchpage from "./pages/Homepage/Searchpage";
import Leaderboard from "./pages/Homepage/Leaderboard";
// game dashboard
import WaitingRoom from "./pages/Game/WaitingRoom";
import Dashboard from "./pages/Game/Dashboard";
import FinalScore from "./pages/Game/FinalScore";

import { useAuth } from "./context/auth";
import Logout from "./components/Logout";

function App() {
  const { authenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("verselet_token");
    const user = localStorage.getItem("verselet_user");
    if (token && user) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <>
        {authenticated ? (
          <>
            <SideNavbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/code" element={<Code />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/search" element={<Searchpage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/waiting" element={<WaitingRoom />} />
              <Route path="/game" element={<Dashboard />} />
              <Route path="/scores" element={<FinalScore />} />
              <Route path="/user/:username" element={<OthersProfile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/logout" element={<Navigate to="/" />} />
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </>
        )}
        <div>
          {/* Main components */}
          <div className="bg-gray-400">
            <Footer />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
