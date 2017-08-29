import React from 'react';
import PropTypes from 'prop-types';
import { Picker, View, } from 'react-native';
import { Row, } from 'react-native-easy-grid';

const Header = ({ onLanguageToggle, locale, }) => (
    <View>
        <Picker
            selectedValue={locale}
            onValueChange={onLanguageToggle}
            style={{ width: 100, }}
        >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Italian" value="it" />
        </Picker>
    </View>
);

Header.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default Header;
