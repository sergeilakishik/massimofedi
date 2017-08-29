import React, { PureComponent, } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, } from 'react-native-easy-grid';

import { connect, } from 'react-redux';

import Home from '../../components/Home';
import Header from '../../components/Header';

import { changeLanguage, } from '../LanguageProvider/actions';


class App extends PureComponent {
    render() {
        return (
            <Grid>
                <Row>
                    <Header
                        onLanguageToggle={this.props.onLanguageToggle}
                        locale={this.props.locale}
                    />
                </Row>
                <Row>
                    <Home />
                </Row>
            </Grid>
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
