import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-smart-button';

const LinkText = styled.Text`
font-size: 24;
font-weight: bold;
padding: 5px;
color: black;
text-decoration-line: ${props => (props.activated ? 'line-through' : 'none')};
`;

const MeniLink = ({ children, }) => (
    <Button onPress={() => true}>
        <LinkText>{children}</LinkText>
    </Button>
);

MeniLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node
    ]).isRequired,
};

export default MeniLink;
