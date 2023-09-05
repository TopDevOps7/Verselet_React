import { useState, useEffect } from "react";
import userAuthApi from "../../../context/api/userAuthApi";

const useSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await userAuthApi.signup(formData);

      const data = await response.data;
      if (response.status === 201 || data.status) {
        setSuccess(response.data.message);
        setError(null);
      } else {
        setSuccess(null);
        setError(data.message);
      }
    } catch (error) {
      console.error(error.message); // log the error message to the console
      setSuccess(null);
      setError("An error occurred while signing up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 3000);
    }
  }, [error]);

  return {
    formData,
    loading,
    success,
    error,
    handleInputChange,
    handleSubmit,
  };
};

export default useSignup;
