import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("verselet_token");
    const user = localStorage.getItem("verselet_user");
    try {
      if (token !== undefined && user !== undefined && token && user) {
        setToken(token);
        setUser(JSON.parse(user));
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
