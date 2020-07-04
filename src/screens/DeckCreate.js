import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Card, Colors } from "react-native-paper";
import Main from "../components/Main";
import { Button, TextInput } from "../components";

import { connect } from "react-redux";
import { handleAddDecks, resetNewDeckId } from "../store/actions/decks";

class DeckCreate extends React.Component {
  state = {
    deckTitle: "",
  };

  onAddCreateDeckPress() {
    if (!this.state.deckTitle) {
      return alert("Please Enter Deck title");
    }
    this.props.addDeck(this.state.deckTitle);
    this.props.navigation.goBack();
  }

  handleChange = (name) => (value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Main>
        <View style={styles.container}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding">
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <TextInput
                    label="Write Deck Title"
                    returnKeyType="done"
                    onChangeText={this.handleChange("deckTitle")}
                    autoCapitalize="sentences"
                  />
                </Card.Content>
                <Card.Actions>
                  <Button
                    mode="contained"
                    icon="plus-circle-outline"
                    color={Colors.green400}
                    onPress={() => this.onAddCreateDeckPress()}
                    style={styles.button}
                  >
                    Create Deck
                  </Button>
                </Card.Actions>
              </Card>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Main>
    );
  }
}

function mapStateToProps({ newDeckId }) {
  return {
    newDeckId: newDeckId.newDeckId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deckTitle) => {
      dispatch(handleAddDecks(deckTitle));
    },
    resetNewDeckId: () => {
      dispatch(resetNewDeckId());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey200,
  },
  card: {
    flex: 1,
  },
  cardContent: {
    paddingTop: 20,
    paddingBottom: 10,
  },
});
