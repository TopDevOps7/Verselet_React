import React from "react";

const users = [
  { id: 1, username: "John Doe", score: 2500, wins: 20, losses: 5 },
  { id: 2, username: "Jane Smith", score: 2000, wins: 15, losses: 10 },
  { id: 3, username: "Bob Johnson", score: 1800, wins: 10, losses: 10 },
  { id: 3, username: "verslet", score: 5000, wins: 20, losses: 10 },
  { id: 3, username: "test", score: 1800, wins: 10, losses: 10 },
];

const Leaderboard = () => {
  return (
    <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900">
      <div className="p-4  dark:border-gray-700 mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
            Leaderboard 👑
          </h1>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-800">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-200 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Score
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Winrate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-50/50 divide-y divide-gray-200 dark:bg-gray-800/90 dark:divide-gray-700">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                                  alt={`${user.username}'s profile picture`}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                  {user.username}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-gray-50">
                              {user.score}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-gray-50">
                              {(
                                (user.wins / (user.wins + user.losses)) *
                                100
                              ).toFixed(2)}
                              %
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
