import React from "react";
import Notification from "../../components/Notification";

function Notifications() {
  return (
    <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900 mt-14">
      <h1 className="text-white p-2 mt-5 "> notifications</h1>
      <div className="items-center justify-center ">
        <Notification />
      </div>
    </div>
  );
}

export default Notifications;
