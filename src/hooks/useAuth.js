import {View, Text} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [islogin, setIsLogin] = useState(false);

  const addUser = ({name}) => {
    setUser(name);
    setIsLogin(true);
    console.log('called and user =', name, islogin);
  };

  const logout = () => {
    setUser(null);
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        islogin: islogin,
        addUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
