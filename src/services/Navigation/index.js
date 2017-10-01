import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { addNavigationHelpers, StackNavigator, } from 'react-navigation';

import Home from '../../screens/Home';

export const AppNavigator = StackNavigator(
    {
        Home: {
            screen: Home,
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

const AppWithNavigationState = ({ dispatch, nav, }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
    locale: state.locale,
});

export default connect(mapStateToProps)(AppWithNavigationState);
