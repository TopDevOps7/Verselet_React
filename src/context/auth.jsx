import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [usertype, setUsertype] = useState("user");
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    const token_ = localStorage.getItem("verselet_token");
    const user_ = localStorage.getItem("verselet_user");
    const usertype_ = localStorage.getItem("verselet_usertype");
    try {
      if (token_ !== undefined && user_ !== undefined && token_ && user_) {
        setToken(token_);
        setUser(JSON.parse(user_));
        setUsertype(usertype_);
        setAuthenticated(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        usertype,
        setUsertype,
        token,
        setToken,
        loading,
        setLoading,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
