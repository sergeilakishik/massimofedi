import { StackNavigator, } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';

const Navigation = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
                headerStyle: {
                    shadowOpacity: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
                },
            },
        },
    }
);

export default Navigation;
