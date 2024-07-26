import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import RoootNavigator from "./src/navigations/RootNavigator";

const App = () => {
  return (
    <RoootNavigator />
    // <View style={styles.container}>
    //   <HomeScreen />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
