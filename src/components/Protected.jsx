import React, {useEffect} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import { useAuth } from "../context/auth";

function ProtectedRoute() {
    const { authenticated, setAuthenticated, usertype, setUsertype, loading } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("verselet_token");
        const user = localStorage.getItem("verselet_user");
        const usertype = localStorage.getItem("verselet_usertype");
        if (token && user && usertype === "user") {
          setAuthenticated(true);
          setUsertype("user");
        }
      }, [authenticated]);

    if (loading) return null;
    return authenticated && usertype === "user" ? 
    (
    <div className="sm:ml-64 h-screen dark:bg-gray-900 flex flex-col justify-between homedashboard">        
      <Outlet />
      <div className="bg-gray-400">
          <Footer />
      </div>
    </div>
    )
    : <Navigate to="/" />;
};

export default ProtectedRoute;