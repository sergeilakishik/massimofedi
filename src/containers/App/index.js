import React, { PureComponent, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { connect, } from 'react-redux';

import Home from '../../components/Home';
import Header from '../../components/Header';

import { changeLanguage, } from '../LanguageProvider/actions';

const AppWripper = styled.View`
    flex: 1;
`;


class App extends PureComponent {
    render() {
        return (
            <AppWripper>
                <Header
                    onLanguageToggle={this.props.onLanguageToggle}
                    locale={this.props.locale}
                />
                <Home />
            </AppWripper>
        );
    }
}

App.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

const mapStateToProps = ({ language, }) => ({
    locale: language.locale,
});

function mapDispatchToProps(dispatch) {
    return {
        onLanguageToggle: value => dispatch(changeLanguage(value)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
