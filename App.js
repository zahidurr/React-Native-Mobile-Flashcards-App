import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen'
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import Router from "./src/router";
import { themestyle } from "./src/utils/themestyle";

const Main = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={themestyle}>
        <Router />
      </PaperProvider>
    </StoreProvider>
  );
}

export default Main;
