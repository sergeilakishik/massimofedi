import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-native-smart-button';
import styled from 'styled-components/native';

const BtnStyled = styled(Button) `
    background-color: black;
    padding: 10px;
    width: 60%;
`;

const Btn = ({ children, }) => (
    <BtnStyled
        textStyle={{
            color: 'white',
            fontSize: 24,
        }}
    >
        {children}
    </BtnStyled>
);

Btn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default Btn;
