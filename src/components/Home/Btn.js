import React from 'react';
import PropTypes from 'prop-types';
import { Text, } from 'react-native';
import styled from 'styled-components/native';
import Button from 'react-native-smart-button';

import arrowRight from './images/arrow_right.png';


const BtnWrapper = styled(Button) `
    border: 1px solid white;
    padding: 10px 20px;
`;

const BtnLabel = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: white;
    text-align: center;
`;

const Icon = styled.Image`
    resize-mode: contain;
    margin: 3px 10px;
`;

const Btn = ({ btnTitle, }) => (
    <BtnWrapper
        onPress={e => e}
    >
        <Text>
            <BtnLabel>{btnTitle.toUpperCase()}<Icon source={arrowRight} /></BtnLabel>
        </Text>
    </BtnWrapper>
);

Btn.propTypes = {
    btnTitle: PropTypes.string.isRequired,
};

export default Btn;
