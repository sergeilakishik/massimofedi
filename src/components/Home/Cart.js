import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Title from './Title';
import BackgroundImg from './BackgroundImg';

const CartConetnt = styled.View`
    padding-bottom: 30px;
`;

const Description = styled.Text`
    font-size: 12;
    padding: 10px 0;
    text-align: center;
    color: white;
`;

const Cart = ({ title, description, bgImg, inversion, children, }) => (
    <BackgroundImg source={bgImg}>
        <CartConetnt>
            {title && <Title inversion={inversion}>{title}</Title>}
            {description && <Description>{description}</Description>}
        </CartConetnt>

        {children}
    </BackgroundImg>
);

Cart.defaultProps = {
    title: undefined,
    description: undefined,
    inversion: false,
};

Cart.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.element.isRequired,
    inversion: PropTypes.bool,
    bgImg: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};

export default Cart;
