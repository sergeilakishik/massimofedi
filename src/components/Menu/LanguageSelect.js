import React from 'react';
import { Text, } from 'react-native';
import styled from 'styled-components/native';

import english from './images/english.png';
import italiano from './images/italiano.png';
import japan from './images/japan.png';

import Icon from './Icon';
import LanguageItem from './LanguageItem';


const SelectWrapper = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;
const Line = styled.Text`
    color: grey;
    font-size: 12;
`;

const LanguageSelect = () => (
    <SelectWrapper>
        <LanguageItem><Icon source={italiano} />ITALIANO</LanguageItem>
        <Line>/</Line>
        <LanguageItem><Icon source={japan} />JAPAN</LanguageItem>
        <Line>/</Line>
        <LanguageItem activated><Icon source={english} />ENGLISH</LanguageItem>
    </SelectWrapper>
);

export default LanguageSelect;
