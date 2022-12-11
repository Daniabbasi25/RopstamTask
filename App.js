import {View, Text} from 'react-native';
import React from 'react';
import AppRoute from './src/navigations/AppRoute';
import {AuthProvider} from './src/hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <View style={{flex: 1}}>
        <AppRoute />
      </View>
    </AuthProvider>
  );
};

export default App;
