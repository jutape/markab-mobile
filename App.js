// In App.js in a new project

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import HomeScreen from "./src/pages/Index";
import Register from './src/pages/register';
import Menu from "./src/pages/Menu";
import step1 from "./src/pages/createEvent/step1";
import step2 from "./src/pages/createEvent/step2";
import step3 from "./src/pages/createEvent/step3";

const fetchFonts = () => {
    return Font.loadAsync({
        "roboto-black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
        "roboto-thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf"),
        roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    });
};

const Stack = createStackNavigator();

function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="step1" component={step1} />
                <Stack.Screen name="step2" component={step2} />
                <Stack.Screen name="step3" component={step3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
