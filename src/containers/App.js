import React, { Component, } from 'react';
import { View, Text, } from 'react-native';

import { connect, } from 'react-redux';
import { fetchData, } from '../actions/dataActions';


class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Text>Hello world</Text>
            </View>
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
