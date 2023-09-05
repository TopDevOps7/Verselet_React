import { useState } from "react";
import userAuthApi from "../../../context/api/userAuthApi";

const useResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
    }
    try {
      const response = await userAuthApi.reset_password({ password, token });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    password,
    setPassword,
    token,
    setToken,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    handleSubmit,
  };
};

export default useResetPassword;
