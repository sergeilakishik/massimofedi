import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View, Text, } from 'react-native';
import styled from 'styled-components/native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-menu';

import Img from './Img';
import logo from './images/logo.png';
import menu from './images/menu.png';
import shoppingCart from './images/shopping_cart.png';

const HeaderWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 10px;
`;

const Header = ({ onLanguageToggle, locale, }) => (
    <MenuContext style={{ flex: 1 }}>
        <TopNavigation />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Hello!</Text></View>
    </MenuContext>
);

const TopNavigation = () => (
    <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
        <View style={{ flex: 1 }}><Text>My App</Text></View>
        <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
            <MenuTrigger>
                <Img source=/>
            </MenuTrigger>
            <MenuOptions>
                <MenuOption value={1}>
                    <Text>One</Text>
                </MenuOption>
                <MenuOption value={2}>
                    <Text>Two</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    </View>
);

Header.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default Header;
