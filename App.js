import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from "./state";
import Navigation from "./app/navigation";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider >
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});