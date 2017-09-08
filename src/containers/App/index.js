import React, { PureComponent, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { NetInfo, View, } from 'react-native';
import { connect, } from 'react-redux';

import { changeLanguage, } from '../LanguageProvider/actions';
import connectionState from './actions';
import Navigation from '../../navigation';

import Header from '../../components/Header';
import ErrorScreen from '../../components/ErrorScreen';
import Menu from '../../components/Menu';

const AppWripper = styled.View`
    flex: 1;
`;


class App extends PureComponent {
    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.props.onConnectionChange);
    }

    componentWillUnmount() {
        console.log('sdsdsdsds');
        NetInfo.isConnected.removeEventListener('change', this.props.onConnectionChange);
    }

    render() {
        const { isConnected, } = this.props;

        return (
            <View style={{ flex: 1, }}>
                {isConnected ? (
                    <AppWripper>
                        <Header
                            onLanguageToggle={this.props.onLanguageToggle}
                            locale={this.props.locale}
                        />
                        <Navigation />
                        <Menu />
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
    isConnected: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ language, app, }) => ({
    locale: language.locale,
    isConnected: app.isConnected,
});

const mapDispatchToProps = dispatch => ({
    onLanguageToggle: value => dispatch(changeLanguage(value)),
    onConnectionChange: isConnected => dispatch(connectionState(isConnected)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
