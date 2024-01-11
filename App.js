import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "./src/screens/HomeScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "./src/screens/LoginScreen"
import SignInScreen from "./src/screens/SignInScreen"
import VerificationScreen from "./src/screens/VerificationScreen"
import VerifyNumber from "./src/screens/VerifyNumber"
import SignupScreen from "./src/screens/SignupScreen"
import OnboardingScreen from './src/screens/OnboardingScreen';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
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
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
