import React, {  useEffect } from "react";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/Protected";
import ProtectedOrgRoute from "./components/ProtectedOrg";
import PublicRoute from "./components/Public";
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
import OrgLogin from "./pages/Organization/Login";
import OrgRegister from "./pages/Organization/Register";
// homepage
import SideNavbar from "./pages/Homepage/SideNavbar";
import OrgSideNavbar from "./pages/Organization/OrgSideNavbar";
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
// organization
import OrgHome from "./pages/Organization/Home";
import OrgProfile from "./pages/Organization/OrgProfile";
import OrgSettings from "./pages/Organization/OrgSettings";
import OrgEvent from "./pages/Organization/OrgEvent";

import { useAuth } from "./context/auth";
import Logout from "./components/Logout";

function App() {
  const { authenticated, setAuthenticated, usertype, setUsertype } = useAuth();

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
        { authenticated ? ( usertype === "user" ? <SideNavbar /> : <OrgSideNavbar /> ) : (<Navbar />) }
        <Routes>
          { authenticated ? ( usertype === "user" ? 
          ( <>
              <Route path="/" element={ <Homepage /> } />
              <Route element={<ProtectedRoute/>}>
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
              </Route>
            </>
          ) :
          ( <>
            <Route path="/" element={ <Navigate to="/organization/" /> } />
            <Route path="/organization/" element={<OrgHome />} />
            <Route element={<ProtectedOrgRoute/>}>
              <Route path="/organization/profile" element={<OrgProfile />} />
              <Route path="/organization/settings" element={<OrgSettings />} />
              <Route path="/organization/event" element={<OrgEvent />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            </>
          ) ) : <Route path="/" element={ <Home /> } />}
          <Route element={<PublicRoute/>}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/organization/login" element={<OrgLogin />} />
            <Route path="/organization/register" element={<OrgRegister />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/logout" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={ <NotFound /> } />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
