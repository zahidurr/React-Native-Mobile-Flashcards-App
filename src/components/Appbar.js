import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ menu, title, navigation }) => (
  <Appbar.Header>
    {menu !== true && (
      <Appbar.BackAction onPress={() => navigation.goBack(null)} />
    )}

    <Appbar.Content
      titleStyle={{
        fontWeight: "bold",
        fontSize: 20,
      }}
      title={title}
      subtitle={null}
    />

    {menu === true && (
      <Appbar.Action
        icon="plus"
        onPress={() => navigation.navigate("DeckCreate")}
      />
    )}
  </Appbar.Header>
);

export default Header;
