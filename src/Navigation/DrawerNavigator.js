import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Screen3" component={Screen3} />
      <Drawer.Screen name="Screen4" component={Screen4} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
