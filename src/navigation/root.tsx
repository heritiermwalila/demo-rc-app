import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/Login.screen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import useAuth from "../hooks/useAuth";
import HomeScreen from "../screens/Home";

const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function Auth() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Start" component={StartScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </AuthStack.Navigator>
  );
}

function Main() {
  const [isLoggedIn] = useAuth();
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      {isLoggedIn && <MainStack.Screen name="Auth" component={Auth} />}
    </MainStack.Navigator>
  );
}

export default function RootApp() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
