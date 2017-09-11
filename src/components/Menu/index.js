import React from 'react';
import { Animated, } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import i18n from '../../i18n';

import LanguageSelect from './LanguageSelect';

const WrapperMenu = styled(Animated.View)`
    position: absolute;
    right: 0;
    left: 0;
    top: 65px;
    align-items: center;
    background-color: white;
    overflow: hidden;
`;

const AnimatedMenu = Animated.createAnimatedComponent(WrapperMenu);

const MenuLink = styled.Text`
    font-size: 24;
    font-weight: bold;
    padding: 5px;
    color: black;
    text-decoration-line: ${props => (props.activated ? 'line-through' : 'none')};
`;

const Menu = ({ menuAnimation, onLanguageToggle, locale, }) => (
    <AnimatedMenu
        style={{
            opacity: menuAnimation,
        }}
    >
        <MenuLink>{i18n.t('menu.search')}</MenuLink>
        <MenuLink>{i18n.t('menu.profile')}</MenuLink>
        <MenuLink>{i18n.t('menu.whishlist')}</MenuLink>
        <MenuLink>{i18n.t('menu.catalog')}</MenuLink>
        <MenuLink>{i18n.t('menu.collections')}</MenuLink>
        <MenuLink>{i18n.t('menu.about')}</MenuLink>
        <MenuLink>{i18n.t('menu.contacts')}</MenuLink>
        <MenuLink>{i18n.t('menu.help')}</MenuLink>
        <LanguageSelect
            onLanguageToggle={onLanguageToggle}
            locale={locale}
        />
    </AnimatedMenu>
);

Menu.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    menuAnimation: PropTypes.object.isRequired,
};

export default Menu;

