import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import MainNavigator from './MainNavigator';

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
    <Drawer.Navigator drawerPosition="right" >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}
