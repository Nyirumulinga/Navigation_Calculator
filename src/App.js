import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Navigation/TabNavigator';
import DrawerNavigator from './src/Navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
