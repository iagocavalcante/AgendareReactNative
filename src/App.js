import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppStack = createStackNavigator({ Home: Home });
const AuthStack = createStackNavigator({ SignIn: Login });

const App = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
));
export default App;
