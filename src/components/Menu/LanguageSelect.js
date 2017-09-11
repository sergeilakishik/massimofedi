import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import english from './images/english.png';
import italiano from './images/italiano.png';
import japan from './images/japan.png';

import Icon from './Icon';
import LanguageItem from './LanguageItem';


const SelectWrapper = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 10px 0;
    justify-content: space-between;
`;
const Line = styled.Text`
    color: #e0e0e0;
    font-size: 12;
`;

const LanguageSelect = ({ onLanguageToggle, locale, }) => (
    <SelectWrapper>
        <LanguageItem
            onPress={onLanguageToggle}
            language="it"
            activated={locale === 'it'}
        >
            <Icon source={italiano} />ITALIANO
        </LanguageItem>
        <Line>/</Line>
        <LanguageItem
            onPress={onLanguageToggle}
            language="jp"
            activated={locale === 'jp'}
        >
            <Icon source={japan} />JAPAN
        </LanguageItem>
        <Line>/</Line>
        <LanguageItem
            onPress={onLanguageToggle}
            language="en"
            activated={locale === 'en'}
        >
            <Icon source={english} />ENGLISH
        </LanguageItem>
    </SelectWrapper>
);

LanguageSelect.propTypes = {
    onLanguageToggle: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default LanguageSelect;
