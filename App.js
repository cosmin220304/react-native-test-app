import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CodeAnalyze from "./components/CodeAnalyze";
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="CodeAnalyze"
          component={CodeAnalyze}
          options={({ }) => ({ title: "Code Analyze" })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
