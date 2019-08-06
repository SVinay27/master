import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Example from './screens/Example';

const App = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: Example,
  },
  App: {
    screen: Example,
  },
});

export default createAppContainer(App);