import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet } from "react-native";

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HeaderTitle from "../components/Header";
import { TAB_ICONS } from "../utils/utils"

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
        name="Root"
        component={BottomTabNavigator}
      />
    </Root.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = 'light';

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        inactiveTintColor: "#BEBEBE",
        activeTintColor: "#EF767A",
      }}
      screenOptions={{
        headerTitle: props => <HeaderTitle {...props} />
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
          tabBarLabel: ""
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="list" focused={focused} />,
          tabBarLabel: ""
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="search" focused={focused} />,
          tabBarLabel: ""
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="user" focused={focused} />,
          tabBarLabel: ""
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabBarIcon = (props) => {
  const { name, focused } = props;
  let activeName = name + (focused ? "-active" : "")

  return (<Image style={{ height: 30, width: 30, marginBottom: -15 }} source={TAB_ICONS[activeName]} />);
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    height: "100%",
    left: 0,
    right: 0,
  }
})