import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, } from 'react-native';
import styled from 'styled-components/native';

import Img from './Img';
import logo from './images/logo.png';
import menu from './images/menu.png';
import shoppingCart from './images/shopping_cart.png';

const ErrorWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 10px;
`;

const Header = ({ onLanguageToggle, locale, }) => (
    <ErrorWrapper>
        <StatusBar
            barStyle="dark-content"
        />

    </ErrorWrapper>
);

Header.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default Header;
