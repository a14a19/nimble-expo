import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./SignInScreen";
import VerificationScreen from "./VerificationScreen";
import VerifyNumber from "./VerifyNumber";
import SignupScreen from "./SignupScreen";
import OnboardingScreen from "./OnboardingScreen";
import PassionsScreen from "./preferencesScreens/PassionsScreen";
import TraitsScreen from "./preferencesScreens/TraitsScreen";
import PreferencesScreen from "./preferencesScreens/PreferencesScreen";
import LookingToFindScreen from "./preferencesScreens/LookingToFindScreen";
import SexualOrientationScreen from "./preferencesScreens/SexualOrientationScreen";
import ChangePasswordScreen from "./ChangePasswordScreen";
import AddPhoto from "./preferencesScreens/AddPhoto";


export default function StackScreens() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyNumber"
          component={VerifyNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Passions"
          component={PassionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Traits"
          component={TraitsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preferences"
          component={PreferencesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LookingToFind"
          component={LookingToFindScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SexualOrientation"
          component={SexualOrientationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddPhoto"
          component={AddPhoto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
