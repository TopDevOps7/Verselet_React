import React, {useEffect} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../context/auth";
import Footer from "../components/Footer";
import Homepage from "../pages/Homepage/Home";

function PublicRoute() {
    const { authenticated, setAuthenticated, loading } = useAuth();

    useEffect(() => {
      const token = localStorage.getItem("verselet_token");
      const user = localStorage.getItem("verselet_user");
      if (token && user) {
        setAuthenticated(true);
      }
    }, [authenticated]);

    if (loading) return null;
    return !authenticated ?
    (
      <div>
        <Outlet />
        <div className="bg-gray-400">
          <Footer />
        </div>
      </div>
    )
    : <Navigate to="/" />;
};

export default PublicRoute;