import React from 'react';
import styled from 'styled-components/native';

import LanguageSelect from './LanguageSelect';

const WrapperMenu = styled.View`
    position: absolute;
    right: 0;
    left: 0;
    top: 65px;
    padding-bottom: 15px;
    align-items: center;
    background-color: white;
`;

const MenuLink = styled.Text`
    font-size: 24;
    font-weight: bold;
    padding: 5px;
    color: black;
`;

const Menu = () => (
    <WrapperMenu>
        <MenuLink>SEARCH</MenuLink>
        <MenuLink>PROFILE</MenuLink>
        <MenuLink>WHISHLIST</MenuLink>
        <MenuLink>CATALOG</MenuLink>
        <MenuLink>COLLETIONS</MenuLink>
        <MenuLink>ABOUT</MenuLink>
        <MenuLink>CONTACTS</MenuLink>
        <MenuLink>HELP</MenuLink>
        <LanguageSelect />
    </WrapperMenu>
);

export default Menu;

