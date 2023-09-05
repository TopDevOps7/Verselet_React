import React from "react";

function Notification() {
  return (
    <div>
      <div
        id="toast-notification"
        className="p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 "
        role="alert"
      >
        <div className="flex items-center mb-3">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            New notification
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative inline-block shrink-0">
            <img
              className="w-12 h-12 rounded-full"
              src="https://m.economictimes.com/thumb/msid-84588036,width-1200,height-900,resizemode-4,imgsize-109325/elon-musk.jpg"
              alt="Jese Leos image"
            />
            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Message icon</span>
            </span>
          </div>
          <div className="ml-3 text-sm font-normal">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              Verselet
            </div>
            <div className="text-sm font-normal">Sent your a friend request</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
