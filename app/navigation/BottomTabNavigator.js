import * as React from 'react';
import { FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";

import { ColorSchemes } from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
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
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarLabel: ""
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color }) => <ListIcon color={color} />,
          tabBarLabel: ""
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarLabel: ""
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarLabel: ""
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  const { name, color } = props;
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeIcon = (props) => (
  <Entypo name="home" size={30} style={{ marginBottom: -15 }} color={props.color} />
)

const ListIcon = (props) => (
  <FontAwesome5 name="list-ul" size={30} style={{ marginBottom: -15 }} color={props.color} />
)

const SearchIcon = (props) => (
  <AntDesign name="search1" size={30} style={{ marginBottom: -15 }} color={props.color} />
)

const SettingsIcon = (props) => (
  <FontAwesome5 name="user" size={30} style={{ marginBottom: -15 }} color={props.color} />
)

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    height: "100%",
    left: 0,
    right: 0,
  }
})