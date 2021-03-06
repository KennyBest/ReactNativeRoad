import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, AlertIOS,
    ScrollView
} from  'react-native';
import { StackNavigator } from 'react-navigation';

import PersonSetting from './PersonSetting';
import ModalStack from './Login';
import BasicControl from './BasicControl';
import TestFlatList from './TestFlatList';
import TestImage from './TestImage';
import TestTextInput from './TestTextInput';
import TestMaskView from './TestMaskedViewIOS';
import ModalView from  './TestModal';

import TestScrollView from "./TestScrollView";
import MySectionList from "./TestSectionList";
import TestCustomTouch from "./TestTouch";
import CustomRequest from "./TestRequest";
import Animation from "./TestAnimstion";
import AppStateExample from "./TestAppState";
import AsyncStorageExample from "./TestAsyncStorage";
import TestCameraRoll from './TestCameraRoll';
import TestClipboard from './TestClipboard';
import TestWebView from "./TestWebView";
import TestLayout from "./TestLayout";

 class Me extends Component<{}> {
     static navigationOptions = {
         title: 'Me',
         headerTitle: 'HeaderTitle-Me',
         headerLeft: <Button title={'Message'} onPress={() => {
             Alert.alert('Alert',
                 'click left navigation bart left button to check message',
                 [
                     {text: 'Cancel'},
                     {text: 'OK'}
                 ]
                 );
         }} />,
         headerRight: <Button title={'Alert-iOS'} onPress={() => {
            AlertIOS.alert(
                'AlertIOS',
                'click right navigation bar right button to show alertIOS',
                [
                    {text: 'OK'}
                ]
            )
         }}
         />
     }

     handleClickSetting() {
         // this.props.navigation.navigate('Setting');
     }

     render() {
         const {navigate} = this.props.navigation;
         let buttons = [
             {id:1, title: 'Basic Control', screen: 'MapView'},
             {id:2, title: 'FlatList', screen: 'KYBFlatList'},
             {id:3, title: 'Image', screen: 'KYBImage'},
             {id:4, title: 'TextInput', screen: 'KYBTextInput'},
             {id:5, title: 'MaskViewIOS', screen: 'KYBMaskView'},
             {id:6, title: 'Modal', screen: 'KYBModal'},
             {id:7, title: 'ScrollView', screen: 'KYBScrollView'},
             {id:8, title: 'SectionList', screen: 'KYBSectionList'},
             {id:9, title: 'TouchableHighlight', screen: 'KYBTouch'},
             {id:10, title: 'Request', screen: 'KYBRequest'},
             {id:11, title: 'Animation', screen: 'KYBAnimation'},
             {id:12, title: 'AppState', screen: 'KYBAppState'},
             {id:13, title: 'AsyncStorage', screen: 'KYBAsyncStorage'},
             {id:14, title: 'CameraRoll', screen: 'KYBCameraRoll'},
             {id:15, title: 'Clipboard', screen: 'KYBClipboard'},
             {id:16, title: 'WebView', screen: 'KYBWebView'},
             {id:17, title: 'layout', screen: 'KYBLayout' }
         ];
         return (
             <View style={styles.view}>
                 <Text>Me</Text>
                 <Button onPress={this.handleClickSetting.bind(this)} title={'Setting'}/>
                 <ScrollView style={{
                     flex: 1
                 }}>
                     {
                         buttons.map((item) => {
                             return <Button key={item.id} title={item.title} onPress={() => {
                                 navigate(item.screen);
                             }}/>;
                         })
                     }
                 </ScrollView>
             </View>
         );
     }
}

let styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

 // StackNavigator(RouterConfig, StackNavigatorConfig)
const MeNavigator = StackNavigator({
    Home: { screen: Me },
    Setting: { screen: PersonSetting },
    ModalStack: { screen: ModalStack},
    MapView: { screen: BasicControl},
    KYBFlatList: { screen: TestFlatList },
    KYBImage: { screen: TestImage},
    KYBTextInput: { screen: TestTextInput },
    KYBMaskView: { screen: TestMaskView },
    KYBModal: { screen: ModalView },
    KYBScrollView: { screen: TestScrollView },
    KYBSectionList: { screen: MySectionList },
    KYBTouch: { screen: TestCustomTouch },
    KYBRequest: { screen: CustomRequest },
    KYBAnimation: { screen: Animation },
    KYBAppState: { screen: AppStateExample },
    KYBAsyncStorage: { screen: AsyncStorageExample },
    KYBCameraRoll: { screen: TestCameraRoll },
    KYBClipboard: { screen: TestClipboard },
    KYBWebView: { screen: TestWebView },
    KYBLayout: { screen: TestLayout }
});


class MineController extends Component {
    render() {
        const { handleTabBar } = this.props.screenProps;
        return (
            <MeNavigator screenProps={{handleTabBar2: handleTabBar}}/>
        );
    }
}
export default MineController;
