import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import map from "../assets/gmap.jpg";

export default function Map() {
  return (
    <View style={styles.container}>
        <Image source={map} style={{ width: 390, height: 600}} />
      </View>
)
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#000000",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
    image: {
    flex: 1,
    width:undefined,
    height:undefined,
    resizeMode: 'center',
  },
})