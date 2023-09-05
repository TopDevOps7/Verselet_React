import React from "react";

function FinalScore() {
  return (
    <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900">
      <div className="p-4  dark:border-gray-700 mt-14">
        <div className="m-10">
          <div class="relative overflow-x-auto  sm:rounded-lg">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
              Your scores will show here once everyone is finished.
            </h1>

            <table class="w-full text-md text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 bg-gray-50 dark:bg-gray-800/50"
                  >
                    Player
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 bg-gray-50 dark:bg-gray-800/50"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 bg-gray-50 dark:bg-gray-800/50"
                  >
                    Rank
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    pruthvi
                  </th>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Silver</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Laptop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalScore;
