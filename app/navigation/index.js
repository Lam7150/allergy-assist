import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerScreen from "../screens/DrawerScreen"

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <Drawer.Navigator drawerPosition="right" drawerContent={DrawerScreen}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
