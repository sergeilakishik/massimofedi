import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-smart-button';

import arrowRight from './images/arrow_right.png';


const BtnWrapper = styled(Button) `
    border: 1px solid white;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
`;

const BtnLabel = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: white;
    text-align: center;
`;

const Icon = styled.Image`
    resize-mode: contain;
    margin-left: 10px;
`;

const Btn = ({ btnTitle, }) => (
    <BtnWrapper
        onPress={e => e}
    >
        <BtnLabel>{btnTitle.toUpperCase()}</BtnLabel><Icon source={arrowRight} />
    </BtnWrapper>
);

Btn.propTypes = {
    btnTitle: PropTypes.string.isRequired,
};

export default Btn;
