import { useState } from "react";
import orgAuthApi from "../../../context/api/orgAuthApi";
import { useAuth } from "../../../context/auth";

const useLogin = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuthenticated, setToken, setUser, setUsertype } = useAuth();

  const handleLogin = async (orgName, password) => {
    try {
      // Make API request to signin user with email and password
      // Replace API_ENDPOINT with your API endpoint

      const response = await orgAuthApi.login({ orgName, password });
      const data = await response.data;
      if (data.status) {
        // Signin successful, set success message and any user data you want to save
        localStorage.setItem("verselet_token", data.data.token);
        setToken(data.data.token);
        const organization = {
          username: data.data.username,
          email: data.data.email,
        };
        localStorage.setItem("verselet_user", JSON.stringify(organization));
        localStorage.setItem("verselet_usertype", "organization");
        setUser(organization);
        setUsertype("organization");
        setSuccess("Login successful");
        setAuthenticated(true);
        // Save user data here, e.g. using localStorage or context
      } else {
        // Signin failed, set error message
        setError(data.message || "Login failed");
        setAuthenticated(false);
      }
    } catch (error) {
      // Handle any other errors here
      setError("Something went wrong. Please try again later.");
      setAuthenticated(false);
    }
  };

  return { error, success, handleLogin };
};

export default useLogin;
