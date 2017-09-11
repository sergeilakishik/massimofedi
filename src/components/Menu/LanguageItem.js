import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-smart-button';

const ItemWrapper = styled(Button) `
    padding: 5px;
`;

const LanguageItem = ({ activated, children, onPress, language, }) => {
    const textStyle = {
        color: activated ? '#000000' : 'rgb(133,133,133)',
        fontSize: 12,
        textDecorationLine: activated ? 'line-through' : 'none',
        textDecorationColor: '#000000',
    };

    return (
        <ItemWrapper
            textStyle={textStyle}
            onPress={() => onPress(language)}
        >
            {children}
        </ItemWrapper>
    );
};

LanguageItem.defaultProps = {
    activated: false,
    onPress: () => true,
};

LanguageItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.strig),
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    activated: PropTypes.bool,
    onPress: PropTypes.func,
    language: PropTypes.string.isRequired,
};

export default LanguageItem;
