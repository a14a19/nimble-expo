import { Provider } from "react-redux"
import { StatusBar, Platform } from "react-native";

import store from "./src/redux/store";
import Main from "./src/Main";

export default function App() {

  return (
    <Provider store={store}>
      <Main />
      {
        Platform.OS ?
          <StatusBar barStyle="dark-content" showHideTransition={true} networkActivityIndicatorVisible={true} animated={true} />
          :
          <StatusBar translucent={true} animated={true} />
      }
    </Provider>
  );
}
