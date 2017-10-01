import React, { PureComponent, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { NetInfo, Animated, View, } from 'react-native';
import { connect, } from 'react-redux';
import { addNavigationHelpers, } from 'react-navigation';

import { changeLanguage, } from '../../services/LanguageProvider/actions';
import connectionState from './actions';
import Navigation from '../../services/Navigation';

import Header from '../../components/Header';
import ErrorScreen from '../../components/ErrorScreen';
import Menu from '../../components/Menu';

const AppWripper = styled.View`
    flex: 1;
`;


class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: false,
            menuAnimation: new Animated.Value(0),
        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.props.onConnectionChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this.props.onConnectionChange);
    }

    toggleMenu = () => {
        const { activeMenu, menuAnimation, } = this.state;

        const opacity = activeMenu ? 0 : 1;

        Animated.timing(
            menuAnimation,
            {
                toValue: opacity,
                duration: 500,
            }
        ).start();

        this.setState(prevState => ({
            activeMenu: !prevState.activeMenu,
        }));
    }

    render() {
        const { isConnected, locale, onLanguageToggle, nav, dispatch, } = this.props;
        const { activeMenu, menuAnimation, } = this.state;

        return (
            <View style={{ flex: 1, }}>
                {isConnected ? (
                    <AppWripper>
                        <Header
                            activeMenu={activeMenu}
                            toggleMenu={this.toggleMenu}
                        />
                        <Navigation
                            screenProps={locale}
                            navigation={addNavigationHelpers({
                                dispatch,
                                state: nav,
                            })}
                        />
                        {activeMenu &&
                            <Menu
                                menuAnimation={menuAnimation}
                                onLanguageToggle={onLanguageToggle}
                                locale={locale}
                            />
                        }
                    </AppWripper>
                ) : (
                    <AppWripper>
                        <ErrorScreen
                            errorMessage="Connection lost"
                        />
                    </AppWripper>
                )}
            </View>
        );
    }
}

App.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    onConnectionChange: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    isConnected: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ language, app, nav, }) => ({
    locale: language.locale,
    isConnected: app.isConnected,
    nav,
});

const mapDispatchToProps = dispatch => ({
    onLanguageToggle: value => dispatch(changeLanguage(value)),
    onConnectionChange: isConnected => dispatch(connectionState(isConnected)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
