import React, {useEffect} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import { useAuth } from "../context/auth";
import Home from "../pages/Home";

function ProtectedRoute() {
    const { authenticated, setAuthenticated, loading } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("verselet_token");
        const user = localStorage.getItem("verselet_user");
        if (token && user) {
          setAuthenticated(true);
        }
      }, [authenticated]);

    if (loading) return null;
    return authenticated ? 
    (
    <div className="sm:ml-64 h-screen dark:bg-gray-900 flex flex-col justify-between">        
      <Outlet />
      <div className="bg-gray-400">
          <Footer />
      </div>
    </div>
    )
    : <Navigate to="/" />;
};

export default ProtectedRoute;