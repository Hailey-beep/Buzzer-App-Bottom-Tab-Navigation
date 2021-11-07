import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/in';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:FaceBookScreen},
  Instagram: {screen:InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigator)