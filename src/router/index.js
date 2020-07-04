import React from "react";
import { createAppContainer } from "react-navigation";

import { Appbar } from "../components";

import { DeckCreate, Deck, CardCreate, Quiz } from "../screens";
import { createStackNavigator } from "react-navigation-stack";
import NavigationDrawer from "./NavigationDrawer";

const screens = {
  DeckCreate: {
    screen: DeckCreate,
    title: "Create New Deck",
  },
  Deck: {
    screen: Deck,
    title: "Deck",
  },
  CardCreate: {
    screen: CardCreate,
    title: "Create New Card",
  },
  Quiz: {
    screen: Quiz,
    title: "Quiz",
  },
};

const routes = Object.keys(screens)
  .map((id) => ({ id, item: screens[id] }))
  .reduce((acc, { id, item }) => {
    const Comp = item.screen;
    const Screen = (props) => <Comp {...props} />;
    Screen.navigationOptions = ({ navigation }) => ({
      header: (
        <Appbar menu={false} title={item.title} navigation={navigation} />
      ),
    });
    return {
      ...acc,
      [id]: { screen: Screen },
    };
  }, {});

const NavigationStack = createStackNavigator(
  {
    Drawer: {
      screen: NavigationDrawer,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Appbar
            menu={true}
            title="Mobile Flashcards"
            navigation={navigation}
          />
        ),
      }),
    },
    ...routes,
  },
  {
    initialRouteName: "Drawer",
  }
);

const Router = createAppContainer(NavigationStack);

export default Router;
