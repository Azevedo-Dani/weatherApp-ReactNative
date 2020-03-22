import React from 'react';
import 'react-native-gesture-handler'
import About from './components/About'
import Search from './components/Search'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StatusBar,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const tab = {
  options: {
    activeTintColor: 'tomato',
    inactiveTintColor: '#81ecec',
    activeTintColor: 'white',
    activeBackgroundColor: '#81ecec',
    showIcon: true,
    showLabel: false
  },
  tabBarIcon: (route) => {
      if (route.name === 'About') {
        return About.navigationOptions.tabBarIcon
      }
      return () => <Ionicons name="md-search" size={32} color="gray" />
  },
}
export default function App() {
  return (
    <View style={{ flex:1 }}>
      <StatusBar hidden/>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={ tab.options } screenOptions={ ({route}) => ({tabBarIcon: tab.tabBarIcon(route) })}>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="About" navigationOptions={About.navigationOptions} component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
   
  );
}