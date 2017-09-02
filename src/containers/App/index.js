import React, { PureComponent, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { NetInfo, } from 'react-native';
import { connect, } from 'react-redux';

import { changeLanguage, } from '../LanguageProvider/actions';
import connectionState from './actions';

import Home from '../../components/Home';
import Header from '../../components/Header';
import ErrorScreen from '../../components/ErrorScreen';

const AppWripper = styled.View`
    flex: 1;
`;


class App extends PureComponent {
    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.props.onConnectionChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this.props.onConnectionChange);
    }

    render() {
        const { isConnected, } = this.props;

        return (
            <AppWripper>
                {isConnected ? (
                    <AppWripper>
                        <Header
                            onLanguageToggle={this.props.onLanguageToggle}
                            locale={this.props.locale}
                        />
                        <Home />
                    </AppWripper>
                ) : (
                    <ErrorScreen
                        errorMessage="Connection lost"
                    />
                )}
            </AppWripper>
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
