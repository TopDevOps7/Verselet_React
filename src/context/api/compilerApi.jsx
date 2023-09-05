import instance from "../axios";

const compilerApi = {
    // To compile a code and get the output
    compile: ({token, language, code, stdin}) => {
        return instance.post("/api/compiler/run", {language, code, stdin}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    },

};

export default compilerApi;