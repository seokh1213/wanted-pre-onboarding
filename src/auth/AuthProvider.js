import { createContext, useState } from "react";

const JWT_TOKEN_KEY = "jwtToken";

const AuthContext = createContext({
  isAuth: false,
  jwtToken: null,
  setAuth: (jwtToken) => {},
});

const AuthProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));

  const setAuth = (jwtToken) => {
    localStorage.setItem(JWT_TOKEN_KEY, jwtToken);
    setJwtToken(jwtToken);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: jwtToken != null,
        jwtToken,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
