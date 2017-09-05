import { StackNavigator, } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';

const Navigation = StackNavigator({
    Home: { screen: HomeScreen, },
});

export default Navigation;
