import React from 'react';
import { Text, View, Button } from 'react-native';

import { LoginForm, UserData } from '../components';
import { useAuth } from '../hooks';

export default function Account() {
  const { user, login, logout } = useAuth();

  const handleLogin = (credentials) => {
    login(credentials);
  };

  const handleLogout = () => {
    logout();
  }

  return (
    <View>
      {user ? (
        <UserData onLogout={handleLogout} user={user} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </View>
  );
}
