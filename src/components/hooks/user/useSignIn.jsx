import { useState } from "react";
import userAuthApi from "../../../context/api/userAuthApi";
import { useAuth } from "../../../context/auth";

const useSignIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuthenticated, setToken, setUser } = useAuth();

  const handleSignIn = async (email, password) => {
    try {
      // Make API request to signin user with email and password
      // Replace API_ENDPOINT with your API endpoint

      const response = await userAuthApi.login({ email, password });
      const data = await response.data;
      if (data.status) {
        // Signin successful, set success message and any user data you want to save
        localStorage.setItem("verselet_token", data.data.token);
        setToken(data.data.token);
        const user = {
          email: data.data.email,
          username: data.data.username,
        };
        localStorage.setItem("verselet_user", JSON.stringify(user));
        setUser(user);
        setSuccess("Sign in successful");
        setAuthenticated(true);
        // Save user data here, e.g. using localStorage or context
      } else {
        // Signin failed, set error message
        setError(data.message || "Sign in failed");
        setAuthenticated(false);
      }
    } catch (error) {
      // Handle any other errors here
      setError("Something went wrong. Please try again later.");
      setAuthenticated(false);
    }
  };

  return { error, success, handleSignIn };
};

export default useSignIn;
