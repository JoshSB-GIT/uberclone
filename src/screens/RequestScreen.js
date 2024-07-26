import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RequestScreen() {
  return (
    <View style={styles.container}>
      <Text>Request Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
