import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import logo from './logo_screen.png';

const Img = styled.Image`
    resize-mode: contain;
    width: 250px;
    height: 250px;
`;

const ErrorMessage = styled.Text`
    padding: 30px 0;
    font-size: 28;
    color: black;
`;

const ErrorWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const ErrorScreen = ({ errorMessage, }) => (
    <ErrorWrapper>
        <Img source={logo} />
        <ErrorMessage>{errorMessage.toUpperCase()}</ErrorMessage>
    </ErrorWrapper>
);

ErrorScreen.defaultProps = {
    errorMessage: 'Erorr',
};

ErrorScreen.propTypes = {
    errorMessage: PropTypes.string,
};

export default ErrorScreen;
