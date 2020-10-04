import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Route } from '../constants/route';
import {
  AddScreen,
  HomeScreen,
  ListScreen,
  TraffigScreen,
  UserScreen,
} from '../screens';

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Route.Home}>
        {({ navigation }) => <HomeScreen navigation={navigation} />}
      </Screen>
      <Screen name={Route.List}>
        {({ navigation }) => <ListScreen navigation={navigation} />}
      </Screen>
      <Screen name={Route.Add}>
        {({ navigation }) => <AddScreen navigation={navigation} />}
      </Screen>
      <Screen name={Route.Traffig}>
        {({ navigation }) => <TraffigScreen navigation={navigation} />}
      </Screen>
      <Screen name={Route.User}>
        {({ navigation }) => <UserScreen navigation={navigation} />}
      </Screen>
    </Navigator>
  </NavigationContainer>
);

export default MainNavigator;
