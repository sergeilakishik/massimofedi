import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-smart-button';

const ItemWrapper = styled(Button) `
    padding: 5px;
`;

const LanguageItem = ({ children, }) => (
    <ItemWrapper
        textStyle={{
            color: '#eee',
            fontSize: 12,
            textDecorationLine: 'line-through',
        }}
    >
        {children}
    </ItemWrapper>
);

LanguageItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default LanguageItem;
