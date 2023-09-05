import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";

function Dashboard() {
  const [code, setCode] = useState("");
  const [test, setTest] = useState();
  const [language, setLanguage] = useState("python");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900 mt-16">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-gray-800 dark:text-white text-xl font-bold">
                Code Editor
              </h2>
              <div className="flex items-center space-x-4">
                <select
                  className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white px-3 py-2 rounded-lg"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="python">Python</option>
                  <option value="javascript">Javascript</option>
                  <option value="c_cpp">C++</option>
                  <option value="csharp">C#</option>
                </select>
                <button className="bg-gray-100 hover:bg-gray-400 hover:text-white focus:bg-gray-500 focus:text-white text-gray-800 dark:hover:bg-purple-700 dark:focus:bg-purple-800 dark:bg-gray-700  dark:text-white px-3 py-2 rounded-lg">
                  Compile
                </button>
                <button className="bg-gray-100 hover:bg-gray-400 hover:text-white focus:bg-gray-500 focus:text-white text-gray-800 dark:hover:bg-purple-700 dark:focus:bg-purple-800 dark:bg-gray-700  dark:text-white px-3 py-2 rounded-lg">
                  Submit code
                </button>
              </div>
            </div>
            <div className="">
              <AceEditor
                className="w-full h-full rounded-lg bg-gray-700 dark:bg-gray-900"
                placeholder="Enter code"
                mode={language}
                theme="twilight"
                name="code-editor"
                onChange={handleCodeChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
              <h2 className="text-gray-800 dark:text-white text-xl font-bold mb-4">
                Compiled Code
              </h2>
              <div className="h-96 bg-gray-700 dark:bg-gray-900 p-2 rounded-md">
                <textarea
                  className="w-full h-full text-gray-200 bg-transparent border-0 resize-none focus:outline-none"
                  placeholder="Code output"
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-full bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow p-4">
            <h2 className="text-gray-800 dark:text-white text-xl font-bold mb-4">
              Coding Question
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Write a function that takes an array of numbers and returns the
              sum of all even numbers in the array.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
