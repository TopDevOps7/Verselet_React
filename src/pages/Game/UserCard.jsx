import React from "react";

function UserCard({ username }) {
  return (
    <div>
      <li>
        <a
          href="#"
          className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <img
            className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
            src="https://images.immediate.co.uk/production/volatile/sites/3/2022/09/6053-19a90fb.jpg?quality=90&resize=980,654"
            alt={`${username} image`}
          />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="text-base font-normal">
              <span className="font-medium text-gray-900 dark:text-white">
                {username}
              </span>
            </div>
            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Ready
            </span>
          </div>
        </a>
      </li>
    </div>
  );
}

export default UserCard;
