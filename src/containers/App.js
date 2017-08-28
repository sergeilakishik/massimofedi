import React, { Component, } from 'react';
import { Grid, } from 'react-native-easy-grid';

import { connect, } from 'react-redux';
import { fetchData, } from '../actions/dataActions';

import Home from '../components/Home';
import Header from '../components/Header';


class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Grid>
                <Header />
                <Home />
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        appData: state.appData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
