import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import PassionsScreen from "./src/screens/PassionsScreen";
import { useState, useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function App() {
  const Stack = createNativeStackNavigator();

  // Initialize state for app readiness
  const [appIsReady, setAppIsReady] = useState(false);

  // Show splash screen while we load Google Fonts
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_400Regular: Montserrat_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Create a callback for when our font is done loading
  const handleOnLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // return null until app is ready
  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onLayout={handleOnLayout}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Passions"
          component={PassionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
