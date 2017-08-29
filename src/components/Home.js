import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import i18n from '../i18n';

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Home = () => (
    <View style={styles.row}>
        <Text>{i18n.t('greeting')}</Text>
    </View>
);

export default Home;
