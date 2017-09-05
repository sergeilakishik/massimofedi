import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-smart-button';

import Title from './Title';
import BackgroundImg from './BackgroundImg';

const Btn = styled(Button)`
    background-color: black;
    padding: 5px 10px;
    margin-top: 30px;
`;

const BtnTitle = styled.Text`
    font-size: 28;
    font-weight: bold;
    color: white;
`;

const Banner = ({ title, bgImg, }) => (
    <BackgroundImg source={bgImg}>
        {title && <Title>{title}</Title>}
        <Btn
            onPress={e => e}
        >
            <BtnTitle>BUY NOW</BtnTitle>
        </Btn>

    </BackgroundImg>
);

Banner.defaultProps = {
    title: undefined,
    inversion: false,
};

Banner.propTypes = {
    title: PropTypes.string,
    bgImg: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};

export default Banner;
