// In App.js in a new project

import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as Font from "expo-font";
import {AppLoading} from "expo";
import {isAuthenticated} from "./src/services/auth";

import HomeScreen from "./src/pages/Index";
import Register from './src/pages/register';
import Menu from "./src/pages/Menu";
import step1 from "./src/pages/createEvent/step1";
import step2 from "./src/pages/createEvent/step2";
import step3 from "./src/pages/createEvent/step3";
import enterEvent1 from "./src/pages/enterEvent/step1";
import enterEvent2 from "./src/pages/enterEvent/step2";
import enterEvent3 from "./src/pages/enterEvent/step3";
import myEvents1 from "./src/pages/myEvents/step1";
import myEvents2 from "./src/pages/myEvents/step2";


const fetchFonts = async () => {
    return await Font.loadAsync({
        "roboto-black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
        "roboto-thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf"),
        roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    });
};


const Stack = createStackNavigator();

function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [signed, setSigned] = useState(false);

    const onloadFunctions = async () => {
        await fetchFonts();
        return await isAuthenticated();
    }
    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={onloadFunctions}
                onFinish={(authValue) => {
                    setDataLoaded(true);
                    setSigned(authValue);
                }}
            />
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={signed?"Menu":"Home"}
            >
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="step1" component={step1}/>
                <Stack.Screen name="step2" component={step2}/>
                <Stack.Screen name="step3" component={step3}/>
                <Stack.Screen name="enterEvent1" component={enterEvent1}/>
                <Stack.Screen name="enterEvent2" component={enterEvent2}/>
                <Stack.Screen name="enterEvent3" component={enterEvent3}/>
                <Stack.Screen name="myEvents1" component={myEvents1}/>
                <Stack.Screen name="myEvents2" component={myEvents2}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
