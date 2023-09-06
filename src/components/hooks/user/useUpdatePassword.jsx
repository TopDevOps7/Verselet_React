import { useState } from "react";
import userAuthApi from "../../../context/api/userAuthApi";
import { useNavigate } from "react-router-dom";

const useUpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    if (currentPassword === newPassword) {
      setError("New password cannot be same as current password");
      setIsLoading(false);
    }
    try {
      const response = await userAuthApi.update_password({
        oldPassword: currentPassword,
        newPassword: newPassword,
        token: token,
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      if(error.response.status === 401){
        navigate("/logout");
      }
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
    return {
      currentPassword,
      setCurrentPassword,
      newPassword,
      setNewPassword,
      token,
      setToken,
      error,
      success,
      handleSubmit,
      isLoading,
    };
  };
};

export default useUpdatePassword;
