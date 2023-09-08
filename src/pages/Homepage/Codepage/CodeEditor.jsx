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
import "./Editor.css";
import useCompiler from "../../../components/hooks/useCompiler";
import { useAuth } from "../../../context/auth";
import { useNavigate } from "react-router-dom";

function Code() {
  const { token } = useAuth();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python3");
  const { getOutput, data, success, error, loading } = useCompiler();
  const naviagate = useNavigate();
  
  React.useEffect(() => {
    if (success) {
      console.log(data);
    }
    if (error) {
      if (error === "401") {
        naviagate("/logout");
      }
    }
  }, [success, data, error]);

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleButtonClick = () => {
    // Convert code to base64 buffer
    const encoder = new TextEncoder();
    const buffer = encoder.encode(code);
    const base64Encoded =
      typeof window !== "undefined"
        ? window.btoa(String.fromCharCode(...buffer))
        : btoa(String.fromCharCode(...buffer));
    console.log(base64Encoded);
    getOutput({
      code: base64Encoded,
      language,
      token,
    });
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="mt-14 p-4 h-auto dark:bg-gray-900">
      <div className="grid grid-cols-3">
        <div className="col-start-1 col-span-4 pt-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose a programming language
          </label>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                value={language}
                onChange={handleLanguageChange}
              >
                <option defaultValue={"python3"}>Choose a language</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="csharp">C#</option>
                <option value="python3">Python</option>
                <option value="nodejs">JavaScript</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                onClick={handleButtonClick}
                className="px-4 py-3 text-sm font-medium w-full text-white bg-violet-500 rounded-md hover:bg-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Run Code
              </button>
            </div>
          </div>

          <AceEditor
            className="w-full h-full rounded-lg bg-gray-800"
            placeholder="Enter code"
            mode="javascript"
            theme="monokai"
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
              editorProps: { $blockScrolling: true },
            }}
          />
        </div>
        <div className="flex justify-start p-2"></div>
        <div className="col-start-1 col-end-4">
          <AceEditor
            className="w-full h-full rounded-lg p-10 bg-gray-800"
            placeholder="Code Output >>"
            theme="twilight"
            name="code-editor"
            fontSize={14}
            value={
              loading
                ? "Loading..."
                : data?.output !== undefined
                ? `${
                    data.output !== undefined ? data?.output : ""
                  }\nMemory Used : ${
                    data.memory !== undefined ? data?.memory : ""
                  }\nTime Taken : ${data.cpuTime ? data?.cpuTime : ""}`
                : `${data.error !== undefined ? data?.error : ""}`
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Code;
