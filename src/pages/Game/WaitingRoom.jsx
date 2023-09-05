import React from "react";
import UserCard from "./UserCard";

function WaitingRoom() {
  const usernames = ["pruthvi", "verselet", "pavan", "arsh"];
  const statusMessage =
    usernames.length === 5
      ? "The game is starting soon..."
      : `Waiting for players to join... (${usernames.length}/5)`;
  return (
    <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900 mt-14">
      <h1 className="text-gray-800 dark:text-white mt-4 text-2xl font-bold p-4 ">
        Waiting room
      </h1>

      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex">
          <p className="text-lg font-semibold text-gray-900 dark:text-white animate-pulse ">
            {statusMessage}
          </p>

          <p className="text-lg font-semibold text-gray-900 dark:text-white ml-auto">
            Room Code: #43534534
          </p>
        </div>
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          {usernames.map((username, index) => (
            <li key={index}>
              <UserCard username={username} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default WaitingRoom;
