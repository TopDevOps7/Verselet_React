import React from "react";
import compilerApi from "../../context/api/compilerApi";
import { useNavigate } from "react-router-dom";

const useCompiler = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const naviagate = useNavigate();
  const getOutput = async ({ token, language, code, stdin }) => {
    try {
      setLoading(true);
      console.log(token, language, code, stdin);
      const response = await compilerApi.compile({
        token,
        language,
        code,
        stdin,
      });
      const data = await response.data.data;
      if (response.data.status === true) {
        setData(data);
        setSuccess(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      if (error.response.status === 401) {
        naviagate("/logout");
        setError("401");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    success,
    getOutput,
  };
};

export default useCompiler;
