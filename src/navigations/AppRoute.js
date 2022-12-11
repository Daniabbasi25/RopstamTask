import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginSCreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import AddCar from '../screens/AddCar';
import {CarProvider} from '../hooks/useCar';
import {Provider} from 'react-native-paper';
const Stack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <Provider>
      <CarProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginSCreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />

            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddCar" component={AddCar} />
          </Stack.Navigator>
        </NavigationContainer>
      </CarProvider>
    </Provider>
  );
};

export default AppRoute;

const styles = StyleSheet.create({});
