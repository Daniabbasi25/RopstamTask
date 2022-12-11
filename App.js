import {View, Text} from 'react-native';
import React from 'react';
import AppRoute from './src/navigations/AppRoute';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppRoute />
    </View>
  );
};

export default App;
