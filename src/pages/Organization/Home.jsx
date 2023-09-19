import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from "../../context/auth";
import userAuthApi from "../../context/api/userAuthApi";
import userProfileApi from "../../context/api/userProfileApi";
import Footer from "../../components/Footer";

function OrgHome() {
  const [showModal, setShowModal] = useState(false);
  const { user, token } = useAuth();  
  const [searchName, setSearchName] = useState("");
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userAuthApi.getUserList({username: searchName, token});
      const data = await response;
      setUserList(data.data.data.usersList);
    } catch (error) {
      error.response.status == 401 ? navigate("/logout") : toast.error(error.response.data.message);
    }
  };

  const sendFriendRequest = async (username) => {
    try {      
      const response = await userProfileApi.sendFriendRequest({friend:username, token});
      toast.info(response.data.message);
    } catch (error) {
      error.response.status == 401 ? navigate("/logout") : toast.error(error.response.data.message);
    }
  };

  return (
    <div className="sm:ml-64 h-screen dark:bg-gray-900 flex flex-col justify-between orghome">
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
      <div className="p-4 dark:border-gray-700 mt-14 p-4">
        <div className="grid grid-rows-2 sx:grid-rows-2 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-rows-1 grid-flow-col gap-4">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <section className="bg-gray-100 dark:bg-gray-800">
              <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
                <div className="mx-auto  text-center">
                  <h2 className="mb-2 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                    Create an event
                  </h2>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                    hi, {user.username}, you can create an event here!
                  </p>
                  <button
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                    onClick={() => setShowModal(true)}
                  >
                    Create
                  </button>
                  <button
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                  >
                    <Link to="/organization/profile">View Profile</Link>                    
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="bg-gray-100 dark:bg-gray-800">
              <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
                <div className="mx-auto text-center">
                  <h2 className="mb-9 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                    Search your events
                  </h2>

                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <label
                      htmlFor="search"
                      className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                        value={searchName}
                        onChange={(event) => setSearchName(event.target.value)}                          
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                {
                  userList.length > 0 && (
                  <div className="block mt-5">
                    {
                    userList.map((uItem, uIndex) => (
                      <div key={uItem.username} className="block w-full p-3 pl-10 text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:text-white">
                        {uItem.username}
                        <button
                          className="ms-3 text-white float-right right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <Link to={"/user/" + uItem.username}>
                          View Profile
                          </Link>
                        </button>
                        <button
                          className="ms-3 text-white float-right  right-1.5 bottom-1.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-light rounded-lg text-sm px-3 py-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                          onClick={() => sendFriendRequest(uItem.username)} 
                        >
                          Send Request
                        </button>
                      </div>

                      ))
                    }
                  </div>
                  )
                }
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-gray-400">
        <Footer />
      </div>

      {showModal ? (
        <>
          <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="true"
            className="h-screen flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 md:h-full"
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create an event
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form action="#">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Visibility
                      </label>
                      <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Choose Event visibility </option>
                        <option value="TV">Private</option>
                        <option value="PC">Public</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Players (5 Max)
                      </label>
                      <input
                        type="number"
                        name="players"
                        id="players"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Choose number of players"
                        min="1"
                        max="5"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Difficulty
                      </label>
                      <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select category</option>
                        <option value="TV">Easy</option>
                        <option value="PC">Medium</option>
                        <option value="GA">Difficult</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    <svg
                      className="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Create Game
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}        
    </div>
  );
}

export default OrgHome;
