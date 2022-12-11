import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginSCreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import AddCar from '../screens/AddCar';
import {CarProvider} from '../hooks/useCar';
import {Provider} from 'react-native-paper';
import useAuth, {AuthProvider} from '../hooks/useAuth';
const Stack = createNativeStackNavigator();

const AppRoute = () => {
  const {islogin, logout} = useAuth();
  console.log('My is login=', islogin);
  return (
    <Provider>
      <NavigationContainer>
        {!islogin ? (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginSCreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        ) : (
          <>
            <CarProvider>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{
                    headerRight: () => (
                      <TouchableOpacity
                        onPress={logout}
                        style={{
                          paddingHorizontal: 20,

                          backgroundColor: 'red',
                          paddingVertical: 5,
                        }}>
                        <Text style={{color: '#fff'}}>LogOut</Text>
                      </TouchableOpacity>
                    ),
                  }}
                />
                <Stack.Screen name="AddCar" component={AddCar} />
              </Stack.Navigator>
            </CarProvider>
          </>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default AppRoute;

const styles = StyleSheet.create({});
