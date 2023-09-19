import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import useLogin from "../../components/hooks/organization/useLogin";

function OrgLogin() {
  const [orgName, setOrgName] = useState("");
  const [password, setPassword] = useState("");
  const { error, success, handleLogin } = useLogin();
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authenticated || success) {
      navigate("/");
    }
  }, [authenticated, navigate, success]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(orgName, password);
  };

  return (
    <section className="bg-gray-100 h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-10">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your organization account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="orgName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Organization"
                  value={orgName}
                  onChange={(event) => setOrgName(event.target.value)}
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required=""
                />
              </div>

              {/* error message display here */}
              {error ? (
                <div
                  className="flex p-2 mt-0 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <svg
                    className="inline flex-shrink-0 mr-3 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>{error}</div>
                </div>
              ) : (
                ""
              )}
              {/* error message */}
              {/* success message display here */}
              {success ? (
                <div
                  className="flex p-2 mt-2 text-sm text-emerald-700 bg-emerald-100 rounded-lg dark:bg-emerald-200 dark:text-emerald-800"
                  role="alert"
                >
                  <svg
                    className="inline flex-shrink-0 mr-3 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>{success}</div>
                </div>
              ) : (
                ""
              )}
              {/* success message */}

              {/* <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div> */}
              <button
                type="submit"
                className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an organization account yet?{" "}
                <Link
                  to="/organization/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register new organization
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrgLogin;
