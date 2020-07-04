import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Subheading, Avatar, Colors } from "react-native-paper";
import { Main, Button } from "../components";
import { connect } from "react-redux";
import { handleDeleteDeck } from "../store/actions/decks";

class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deckTitle: "",
    };
  }

  onAddCardPress(id) {
    this.props.navigation.navigate("CardCreate", {
      deckId: id,
    });
  }

  onStartQuizPress(id) {
    this.props.navigation.navigate("Quiz", {
      deckId: id,
    });
  }

  onDeleteDeckPress(id) {
    this.props.deleteDeck(id);
  }

  static getDerivedStateFromProps(props) {
    if (!props.deck) {
      props.navigation.goBack();
    }

    // Return null to indicate no change to state.
    return null;
  }

  render() {
    const { deck } = this.props;
    if (deck) {
      return (
        <Main>
          <View style={styles.container}>
            <Avatar.Icon size={90} icon="card-text" />
            <Headline>{deck.title}</Headline>
            <Subheading>{deck.questions.length} Cards</Subheading>

            <Button
              icon="restart"
              mode="contained"
              color={Colors.green400}
              disabled={deck.questions.length > 0 ? false : true}
              onPress={() => this.onStartQuizPress(deck.id)}
            >
              Start Quiz
            </Button>

            <Button
              icon="folder-plus-outline"
              mode="outlined"
              onPress={() => this.onAddCardPress(deck.id)}
            >
              Add Card
            </Button>

            <Button
              icon="trash-can-outline"
              mode="outlined"
              color={Colors.red500}
              style={styles.buttonDeleteDeck}
              onPress={() => this.onDeleteDeckPress(deck.id)}
            >
              Delete Deck
            </Button>
          </View>
        </Main>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps({ decks }, props) {
  const { deckId } = props.navigation.state.params;
  return {
    deck: decks[deckId],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteDeck: (deckId) => {
      dispatch(handleDeleteDeck(deckId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
