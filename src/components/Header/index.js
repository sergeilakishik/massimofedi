import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Hamburger from 'react-native-hamburger';

import Img from './Img';
import logo from './images/logo.png';
import shoppingCart from './images/shopping_cart.png';


const HeaderWrapper = styled.View`
    padding-top: 30px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

const Header = ({ activeMenu, toggleMenu, }) => (
    <HeaderWrapper>
        <Img source={logo} />
        <Hamburger
            active={activeMenu}
            type="cross"
            onPress={toggleMenu}
        />
        <Img source={shoppingCart} />
    </HeaderWrapper>
);

Header.propTypes = {
    activeMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default Header;
