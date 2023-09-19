import React, {useState, useEffect} from "react";
import { useAuth } from "../../context/auth";
import useProfileData from "../../components/hooks/useProfileData.jsx";
import { Link } from "react-router-dom";

function OrgProfile() {
  const { user, token } = useAuth();
  const [username, setUsername] = useState("");
  const { data, success, getData, error, loading } = useProfileData();

  useEffect(() => {
    if (!user) return;
    setUsername(user.username);
  }, [username, token]);

  useEffect(() => {
    getData({ username: user.username, token });
  }, []);

  return (
    <div className="mt-14">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <form action="#">
            <img
              className="rounded-full w-48 h-48 mb-6 mx-auto"
              src={data.profilePicture ? data.profilePicture : "/avatar.jpg"}
              alt="image description"
            />

            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Organization Information
                </h2>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data && data.username ? data.username : ""}
                  readOnly
                  disabled
                />                
              </div>

              <div className="w-full">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data && data.email ? data.email : ""}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="flex mb-5 -space-x-3">
              {data.friends && data.friends.length ? (
                <img
                  className="w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-100"
                  src="https://pbs.twimg.com/media/EwtHu9PVEAcetn3.jpg"
                  alt="Bordered avatar"
                />
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-center">
              <Link
                to="/organization/settings"
                className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Organization Settings
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default OrgProfile;
