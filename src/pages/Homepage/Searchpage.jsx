import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from "../../context/axios";
import { useNavigate } from "react-router-dom";

function Searchpage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  let navigate = useNavigate();

  const fetchResults = async () => {
    try {
      const response = await instance.get("api/user/get-users-data", {
        params: { username: query },
      });
      const { data } = response.data;
      setResults(data.usersList);
    } catch (error) {
      error.response.status == 401 ? navigate("/logout") : toast.error(error.response.data.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchResults();
  };

  const handleProfileRedirect = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <div>
      {/* sidenav */}
      {/* navbar */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900">
        <div className="p-4  dark:border-gray-700 mt-14">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div>
              <section className="bg-gray-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-8">
                      <h1 className="text-2xl font-bold text-gray-900 flex-grow text-white">{`Search results for "${query}"`}</h1>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <form
                          onSubmit={handleSearch}
                          className="hidden lg:block lg:pl-2"
                        >
                          <label htmlFor="topbar-search" className="sr-only">
                            Search
                          </label>
                          <div className="relative mt-1 lg:w-96">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <input
                              type="text"
                              name="text"
                              id="search_friend"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Search again"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                            />
                          </div>
                        </form>
                        <Link
                          to="/"
                          onClick={handleSearch}
                          className="pl-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Search
                        </Link>
                      </div>
                    </div>
                    {results.map((result) => (
                      <div
                        key={result.username}
                        className="bg-white dark:bg-gray-700/50 hover:dark:bg-purple-700/60 cursor-pointer shadow overflow-hidden sm:rounded-lg mb-4"
                        onClick={() => handleProfileRedirect(result.username)}
                      >
                        <div className="px-4 py-3 sm:px-6 flex items-center">
                          <img
                            src={result.profileImage}
                            alt={`${result.username}'s profile picture`}
                            className="w-10 h-10 rounded-full mr-4"
                          />
                          <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                            {result.username}
                          </h2>
                        </div>
                      </div>
                    ))}
                    {results.length === 0 && (
                      <div className="bg-white dark:bg-gray-900 overflow-hidden  mb-4">
                        <div className="px-2 py-3 sm:px-2">
                          <h2 className="text-sm leading-6 font-medium text-gray-900 dark:text-white">
                            No results found
                          </h2>
                        </div>
                      </div>
                    )}
                    {results.length > 0 && (
                      <div className="bg-white dark:bg-gray-900 overflow-hidden  mb-4">
                        <div className="px-2 py-3 sm:px-2">
                          <h2 className="text-sm leading-6 font-medium text-gray-900 dark:text-white">
                            Showing {results.length} results
                          </h2>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
