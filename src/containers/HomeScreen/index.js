import React from 'react';
import styled from 'styled-components/native';

import { Cart, Banner, } from '../../components/MainList';
import Btn from './Btn';

const HomeWrapper = styled.ScrollView`
    flex: 1;
`;

const HomeScreen = () => (
    <HomeWrapper
        showsVerticalScrollIndicator={false}
    >
        <Cart
            bgImg={require('./images/kimano.png')}
            title="A kimono for every occasion!"
            description="See our Spring/Summer collection of kimonos"
        >
            <Btn
                btnTitle="Browse kimonos"
            />
        </Cart>
        <Banner
            title="The Spring/Summer collection is here!"
            bgImg={require('./images/banner.png')}
        />
        <Cart
            bgImg={require('./images/clothes.png')}
        >
            <Btn
                btnTitle="More clothes"
            />
        </Cart>
        <Cart
            title="WANT TO KNOW MORE ABOUT US?"
            bgImg={require('./images/about_us.png')}
            inversion
        >
            <Btn
                btnTitle="Read our story"
            />
        </Cart>
    </HomeWrapper>
);

export default HomeScreen;
