import React, { useState } from 'react';
import { set } from 'react-native-reanimated';

import { user as userCredentials, userDetails } from '../utils/userDb';

export const Auth = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    if (username !== userCredentials.username || password !== userCredentials.password) {
      throw new Error('usuario o contraseña incorrectos');
    }
    setUser(userDetails);
  };

  const logout = () => {
    setUser(null);
  } 

  return {
    login,
    logout,
    user,
  }
}


export default function AuthProvider({ children }) {
  const auth = useAuth();
  return (
    <Auth.Provider value={auth}>
      {children}
    </Auth.Provider>
  );
};



