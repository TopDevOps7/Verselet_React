import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

function Logout() {
  const { setAuthenticated, setToken, setUser, authenticated } = useAuth();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (authenticated) {
      setAuthenticated(false);
      setToken(null);
      setUser(null);
      localStorage.removeItem("verselet_token");
      localStorage.removeItem("verselet_user");
      navigate("/");
    } else {
      navigate("/");
    }
  }, []);

  // Function to handle API request error
  const handleRequestError = (error) => {
    if (error.message === "Unauthorized") {
      // Perform logout actions
      setAuthenticated(false);
      setToken(null);
      setUser(null);
      localStorage.removeItem("verselet_token");
      localStorage.removeItem("verselet_user");
      navigate("/");
    }
  };

  // Simulating an API request with an error
  const simulateAPIRequest = () => {
    // Assuming an asynchronous API call that may result in an error
    setTimeout(() => {
      const error = new Error("Unauthorized");
      handleRequestError(error);
    }, 2000);
  };

  return <div>Logout</div>;
}

export default Logout;
