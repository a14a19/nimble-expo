import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignInScreen from "./SignInScreen";
import VerificationScreen from "./VerificationScreen";
import VerifyNumber from "./VerifyNumber";
import SignupScreen from "./SignupScreen";
import OnboardingScreen from "./OnboardingScreen";
import PassionsScreen from "./PassionsScreen";
import TraitsScreen from "./TraitsScreen";
import PreferencesScreen from "./PreferencesScreen";
import LookingToFindScreen from "./LookingToFindScreen";
import SexualOrientationScreen from "./SexualOrientationScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import VerifyEmailScreen from "./VerifyEmailScreen";
import ChangePasswordScreen from "./ChangePasswordScreen";


export default function StackScreens() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Before"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          /> */}
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
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmailScreen}
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
