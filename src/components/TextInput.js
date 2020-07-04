import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { themestyle } from "../utils/themestyle";

const InputText = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input style={styles.input} mode="outlined" {...props} />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  error: {
    fontSize: 14,
    color: themestyle.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default InputText;
