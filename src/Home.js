import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MyDuyetBai from './MyDuyetBai';

import DuyetBai from './DuyetBai';
import ChiTietBai from './ChiTietBai';
import CommentChiTiet from './CommentChiTiet';
import ViTriMapChiTiet from './ViTriMapChiTiet';

import SearchPlace from './SearchPlace';
import SavedPlace from './SavedPlace';
import TrangCaNhan from './TrangCaNhan';

const StackNavi = StackNavigator({
    DuyetBai: {
        screen: DuyetBai,
    },
    ChiTietBai: {
        screen: ChiTietBai,
    },
    CommentChiTiet: {
        screen: CommentChiTiet,
    },
    ViTriMapChiTiet: {
        screen: ViTriMapChiTiet,
    },
}, {
        // headerMode: 'none',
        mode: 'card',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

const RootNavigator = TabNavigator({
    Home: {
        screen: StackNavi,
    },
    Search: {
        screen: SearchPlace,
    },
    Saved: {
        screen: SavedPlace,
    },
    User: {
        screen: TrangCaNhan,
    },

}, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        tabBarVisible: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
        }
    }
);

export default RootNavigator;
// export default MyDuyetBai;