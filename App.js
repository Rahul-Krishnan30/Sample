import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//components 
import Login from '../Sample/src/components/auth/Login';
import Splash from '../Sample/src/components/auth/Splash';
import Home from '../Sample/src/components/dashboard/Home';

//creating instance of navigator
const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs(); //to disale logbox
  }, []);



  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
