import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <View style={{...styles.screenContainer, paddingTop: -50}}>
      <AppButton title="Navigate" />
      <View style={{height: 30}} />
      <AppButton title="Reserve" />
      <View style={{height: 30}} />
      <AppButton title="Pay now" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 124,
  },
  appButtonContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 3,
    paddingVertical: 9,
  },
  appButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default App;