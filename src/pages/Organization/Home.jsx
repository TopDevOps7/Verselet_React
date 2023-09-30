import React, { useState, useMemo, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'
import ColorPicker, { Color, ColorBlock  }from '@rc-component/color-picker';
import Trigger from '@rc-component/trigger';

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/color-picker.less';

import { useAuth } from "../../context/auth";
import userAuthApi from "../../context/api/userAuthApi";
import userProfileApi from "../../context/api/userProfileApi";
import Footer from "../../components/Footer";
import builtinPlacements from '../../components/hooks/organization/placements';

function OrgHome() {
  const [showModal, setShowModal] = useState(false);
  const [primaryColor, setPrimaryColor] = useState(new Color('#163cff'));
  const [secondaryColor, setSecondaryColor] = useState(new Color('#ff1616'));
  const prefixCls = 'rc-color-picker';
  
  const p_color = useMemo(
    () =>
      typeof primaryColor === 'string'
        ? primaryColor
        : primaryColor.getAlpha() < 1
        ? primaryColor.toHex8String()
        : primaryColor.toHexString(),
    [primaryColor],
  );
  const s_color = useMemo(
    () =>
      typeof secondaryColor === 'string'
        ? secondaryColor
        : secondaryColor.getAlpha() < 1
        ? secondaryColor.toHex8String()
        : secondaryColor.toHexString(),
    [secondaryColor],
  );

  const { user, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(showModal) {
    }
  }, [showModal]);

  const toHexFormat = (value) => value?.replace(/[^0-9a-fA-F#]/g, '').slice(0, 9) || '';

  const handleQuestionsFileChange = (e) => {
    console.log("eeeeeeeee", e);
  };

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
                    Hi, {user.username}, you can create an event here!
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
                    <Link to="/organization/profile">View Event</Link>                    
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-gray-400">
        <Footer />
      </div>

      {showModal ?
       (
        <>
          <div id="defaultModal"
            tabIndex="-1"
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
                    <div className="col-span-2">
                      <label
                        htmlFor="eventTitle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Title
                      </label>
                      <input
                        type="text"
                        name="eventTitle"
                        id="eventTitle"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type the event title"
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="primaryColor"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Primary Color
                      </label>
                      <div className="grid gap-1 mb-4 grid-cols-6">
                        <Trigger
                          action={['click']}
                          prefixCls={prefixCls}
                          popupPlacement="bottomLeft"
                          builtinPlacements={builtinPlacements}
                          popup={<ColorPicker value={primaryColor} onChange={setPrimaryColor} />}
                        >
                          <ColorBlock 
                            color={p_color}
                            prefixCls={prefixCls}
                          />
                        </Trigger>
                        
                        <input
                          value={p_color}
                          onChange={e => {
                            const originValue = e.target.value;
                            setPrimaryColor(toHexFormat(originValue));
                          }}
                          className="col-span-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="secondaryColor"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Secondary Color
                      </label>
                      <div className="grid gap-1 mb-4 grid-cols-6">
                        <Trigger
                          action={['click']}
                          prefixCls={prefixCls}
                          popupPlacement="bottomLeft"
                          builtinPlacements={builtinPlacements}
                          popup={<ColorPicker value={secondaryColor} onChange={setSecondaryColor} />}
                        >
                          <ColorBlock 
                            color={s_color}
                            prefixCls={prefixCls}
                          />
                        </Trigger>
                        
                        <input
                          value={s_color}
                          onChange={e => {
                            const originValue = e.target.value;
                            setSecondaryColor(toHexFormat(originValue));
                          }}
                          className="col-span-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="questions"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload Questions File (.CSV)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              className="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Click to upload</span> or
                              drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            accept=".csv"
                            onChange={handleQuestionsFileChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
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
                      Create Event
                    </button>
                  </div>
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
