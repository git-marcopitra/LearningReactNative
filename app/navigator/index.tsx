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

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.Home}>
        {({ navigation }) => <HomeScreen navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name={Route.List}>
        {({ navigation }) => <ListScreen navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name={Route.Add}>
        {({ navigation }) => <AddScreen navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name={Route.Traffig}>
        {({ navigation }) => <TraffigScreen navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name={Route.User}>
        {({ navigation }) => <UserScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
