import * as React from "react";
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
import { handleAddCardToDeck } from "../store/actions/decks";

class CardCreate extends React.Component {
  onAddCardPress() {
    const { deckId } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    if (!question || !answer) {
      return alert("Please Enter all the fields");
    }
    this.props.addCardToDeck(deckId, {
      question,
      answer,
    });
    this.props.navigation.goBack();
  }

  state = {
    question: "",
    answer: "",
  };

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
                    label="Write Question"
                    returnKeyType="done"
                    onChangeText={this.handleChange("question")}
                    autoCapitalize="sentences"
                  />
                  <TextInput
                    label="Write Answer"
                    returnKeyType="done"
                    onChangeText={this.handleChange("answer")}
                    autoCapitalize="sentences"
                  />
                </Card.Content>
                <Card.Actions>
                  <Button
                    mode="contained"
                    icon="plus-circle-outline"
                    color={Colors.green400}
                    style={styles.button}
                    onPress={() => this.onAddCardPress()}
                  >
                    Create Card
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

function mapDispatchToProps(dispatch) {
  return {
    addCardToDeck: (deckId, card) => {
      dispatch(handleAddCardToDeck(deckId, card));
    },
  };
}

export default connect(null, mapDispatchToProps)(CardCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey100,
  },
  card: {
    flex: 1,
  },
  cardContent: {
    paddingTop: 20,
    paddingBottom: 10,
  },
});
