import { Provider } from "react-redux"
import { StatusBar, Platform } from "react-native";
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

import store from "./src/redux/store";
import Main from "./src/Main";

export default function App() {

  const [fontsLoaded] = useFonts({
    'mont-light': require('./src/assets/fonts/Montserrat-Light.ttf'),
    'mont-light-italic': require('./src/assets/fonts/Montserrat-LightItalic.ttf'),
    'mont-thin': require('./src/assets/fonts/Montserrat-Thin.ttf'),
    'mont-thin-italic': require('./src/assets/fonts/Montserrat-ThinItalic.ttf'),
    'mont-reg': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'mont-italic': require('./src/assets/fonts/Montserrat-Italic.ttf'),
    'mont-med': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'mont-med-italic': require('./src/assets/fonts/Montserrat-MediumItalic.ttf'),
    'mont-semibold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    'mont-semibold-italic': require('./src/assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'mont-bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'mont-bold-italic': require('./src/assets/fonts/Montserrat-BoldItalic.ttf'),
    'mont-extrabold': require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
    'mont-extrabold-italic': require('./src/assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
  });

  useEffect(() => {

    SplashScreen.preventAutoHideAsync();

    (async function () {
      await SplashScreen.hideAsync();
      // console.log("font loaded", fontsLoaded, Platform)
    })();
    // console.log("font not loaded", fontsLoaded, Platform)
  }, [fontsLoaded])

  return (
    <Provider store={store}>
      {
        fontsLoaded
        &&
        <Main />
      }
      {
        Platform.OS === "ios" ?
          <StatusBar barStyle="dark-content" showHideTransition={true} networkActivityIndicatorVisible={true} animated={true} />
          :
          <StatusBar translucent={true} animated={true} />
      }
    </Provider>
  );
}
