import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from "react-native";

import MainScreen from '../screens/MainScreen';
import HeaderTitle from "../components/Header";

// This Stack Navigator serves primarily to display a header at the top of all the Home pages
const Root = createStackNavigator();

export default function RootNavigator() {
  return (
    <Root.Navigator
      screenOptions={{
        headerTitle: props => <HeaderTitle {...props} />,
        headerTitleContainerStyle: styles.headerTitleContainer,
        headerTitleAlign: "left"
      }}>
      <Root.Screen
        name="MainScreen"
        component={MainScreen}
      />
    </Root.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    height: "100%",
    left: 0,
    right: 0,
  }
})