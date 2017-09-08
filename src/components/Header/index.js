import React from 'react';
import PropTypes from 'prop-types';
import { View, } from 'react-native';
import styled from 'styled-components/native';

import Img from './Img';
import logo from './images/logo.png';
import menu from './images/menu.png';
import shoppingCart from './images/shopping_cart.png';


const HeaderWrapper = styled.View`
    padding-top: 30px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

const Header = ({ onLanguageToggle, locale, }) => (
    <HeaderWrapper>
        <Img source={logo} />
        <Img source={menu} />
        <Img source={shoppingCart} />
    </HeaderWrapper>
);

Header.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default Header;
