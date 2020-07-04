import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import Router from "./src/router";
import { themestyle } from "./src/utils/themestyle";

const Main = () => (
  <StoreProvider store={store}>
    <PaperProvider theme={themestyle}>
      <Router />
    </PaperProvider>
  </StoreProvider>
);

export default Main;
