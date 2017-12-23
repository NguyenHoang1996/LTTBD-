import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Platform, StyleSheet, View, Image, Button, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Title, NavigationBar, Row, Divider, Caption, Video, Icon, Tile } from '@shoutem/ui';
import { NavigationActions } from "react-navigation";

// import Swiper from 'react-native-swiper';
import CarouselPager from 'react-native-carousel-pager';

import DuyetBaiCarous from './DuyetBaiCarous';
import DuyetBaiNearMe from './DuyetBaiNearMe';
import DuyetBaiBaiPost from './DuyetBaiBaiPost';

const HEIGHT_COL = 42;
const HEIGHT_SWIPE_TOP = 150;


let aaaa = [
  {
    "id": 0,
    "img": "https://kenh14cdn.com/thumb_w/600/d4b5d372a0/2015/08/05/9-05b6b.jpg",
    "text": "HỒ CON RÙA",
  },
  {
    "id": 1,
    "img": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
    "text": "NHÀ THỜ ĐỨC BÀ",
  },
  {
    "id": 2,
    "img": "http://landtoday.net/upload/1970/01/01/chua-xay-lai-cho-ben-thanh.jpg",
    "text": "CHỢ BẾN THÀNH",
  },
];

// export default class DuyetBaiCarous extends Component {
class DuyetBaiCarousss extends Component {

  // static navigationOptions = {
  //   header: null,
  //   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('./img/home.png')}
  //       style={[styles.icon, { tintColor: tintColor }]}
  //     />
  //   ),
  // };

  toChiTietBai = (text) => {
    const toChiTietBai = NavigationActions.navigate({
      routeName: "ChiTietBai",
      params: { name: text }
    })
    this.props.navigation.dispatch(toChiTietBai);
  }

  render() {
    let imgar = [];
    let n = aaaa.length;
    for (let index = 0; index < n; index++) {
      imgar.push(
        <View key={index} style={styles.carous}>
          <Image
            style={styles.carousImage}
            source={{ uri: aaaa[index].img }}
          />
          <View style={[styles.carousImageInside, { opacity: 0.3, backgroundColor: "black", }]} />
          <View style={[styles.carousImageInside, { height: 120, width: 240 }]}>
            {/* <TouchableOpacity onPress={() => this.props.onPress()}> */}
            <TouchableOpacity onPress={() => { this.toChiTietBai(aaaa[index].text) }} >
              <Text style={styles.textOnImg}>{aaaa[index].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={{ marginTop: 0, height: 120, width: "100%", flexDirection: 'row', backgroundColor: '#D3D3D3', paddingTop: 5, paddingBottom: 5 }}>
        <CarouselPager >
          {imgar}
        </CarouselPager>
      </View>
    )
  }
}

export default class DuyetBai extends Component {
  static navigationOptions = {
    header: null,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  toCommentChiTiet = () => {
    const toCommentChiTiet = NavigationActions.navigate({
      routeName: "CommentChiTiet"
    })
    this.props.navigation.dispatch(toCommentChiTiet);
  }

  render() {

    const { naviga } = this.props.navigation;

    return (
      <View>
        <View style={{ width: "100%", height: 58, paddingTop: 5, backgroundColor: "#551A8B" }}>
          <NavigationBar
            styleName="clear"
            hasHistory
            centerComponent={<Title>ĐỊA ĐIỂM</Title>}
            share={{
              link: 'http://shoutem.github.io',
              text: 'This is the best',
              title: 'Super cool UI Toolkit',
            }}
          />
        </View>

        <ScrollView style={{ height: 460 }}>
          <DuyetBaiCarous navigation={this.props.navigation} />
          {/* <DuyetBaiCarousss navigation={this.props.navigation}/> */}
          <DuyetBaiNearMe navigation={this.props.navigation} />
          <DuyetBaiBaiPost navigation={this.props.navigation} />

          <Button
            onPress={() => this.props.navigation.navigate('ChiTietBai', { name: 'Lucy' })}
            title="Go to ChiTietBai"
          />

          <Button
            onPress={this.toCommentChiTiet}
            title="Go to CommentChiTiet"
            style={{ marginBottom: 20 }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  carous: {
    height: 120,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#fff',
    borderRadius: 0
  },
  carousImage: {
    height: 120,
    width: 320,
    backgroundColor: "transparent",
  },
  carousImageInside: {
    height: 120,
    width: 320,
    position: "absolute",
    justifyContent: "center",
    alignItems: 'center',
  },
  textOnImg: {
    fontSize: 24,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 32,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
