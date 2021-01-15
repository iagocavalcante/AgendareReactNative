import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Drawer from './widgets/Drawer';
import {Dimensions} from 'react-native';
import Profile from './screens/Profile/Profile';

const width = Dimensions.get('screen').width;

const AppStack = createStackNavigator(
  {
    Home: Home,
    Profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerStyle: {
          backgroundColor: '#03496b',
        },
        headerTitle: <Image source={require('./assets/images/logo.png')} />,
        headerLeft: (
          <TouchableOpacity
            style={{
              marginLeft: 15,
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={require('./assets/images/icon-hamburger.png')} />
          </TouchableOpacity>
        ),
      };
    },
  },
);
const AuthStack = createStackNavigator({SignIn: Login});
const MainNavigator = createDrawerNavigator(
  {
    AppStack,
  },
  {
    contentComponent: Drawer,
    style: {
      drawer: {width: width},
    },
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      App: MainNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
export default App;
