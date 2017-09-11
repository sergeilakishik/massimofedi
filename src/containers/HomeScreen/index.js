import React from 'react';
import styled from 'styled-components/native';

import { Cart, Banner, } from '../../components/MainList';
import Btn from './Btn';
import i18n from '../../i18n';

const HomeWrapper = styled.ScrollView`
    flex: 1;
`;

const HomeScreen = () => (
    <HomeWrapper
        showsVerticalScrollIndicator={false}
    >
        <Cart
            bgImg={require('./images/kimano.png')}
            title={i18n.t('homeScreen.kimano.title')}
            description={i18n.t('homeScreen.kimano.description')}
        >
            <Btn
                btnTitle={i18n.t('homeScreen.kimano.btn')}
            />
        </Cart>
        <Banner
            title={i18n.t('homeScreen.banner.title')}
            bgImg={require('./images/banner.png')}
            btn={i18n.t('homeScreen.banner.btn')}
        />
        <Cart
            bgImg={require('./images/clothes.png')}
        >
            <Btn
                btnTitle={i18n.t('homeScreen.moreClothes.btn')}
            />
        </Cart>
        <Cart
            title={i18n.t('homeScreen.aboutUs.title')}
            bgImg={require('./images/about_us.png')}
            inversion
        >
            <Btn
                btnTitle={i18n.t('homeScreen.aboutUs.btn')}
            />
        </Cart>
    </HomeWrapper>
);

export default HomeScreen;
