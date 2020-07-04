import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { List, Divider } from "react-native-paper";
import Main from "../components/Main";
import { connect } from "react-redux";

class DeckList extends React.Component {
  state = {
    decks: null,
  };

  onButtonPress() {
    this.props.navigation.navigate("Details");
  }

  onDeckCardPress(deck) {
    this.props.navigation.navigate("Deck", {
      deckId: deck.id,
      title: deck.title,
      navigation: this.props.navigation,
    });
  }
  render() {
    const { decks } = this.props;
    return (
      <Main>
        <ScrollView>
          {decks &&
            Object.keys(decks).map((id) => (
              <TouchableOpacity
                key={id}
                onPress={() => this.onDeckCardPress(decks[id])}
              >
                <List.Item
                  title={decks[id].title}
                  description={"Total cards: " + decks[id].questions.length}
                  left={(props) => <List.Icon {...props} icon="card-text" />}
                  right={(props) => (
                    <List.Icon {...props} icon="chevron-right" />
                  )}
                />

                <Divider />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </Main>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
