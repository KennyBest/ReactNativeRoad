import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, AlertIOS } from  'react-native';
import PersonSetting from './PersonSetting';
import ModalStack from './Login';
import BasicControl from './BasicControl';
import TestFlatList from './TestFlatList';
import TestImage from './TestImage';
import TestTextInput from './TestTextInput';
import TestMaskView from './TestMaskedViewIOS';
import ModalView from  './TestModal';
import { StackNavigator } from 'react-navigation';
import TestScrollView from "./TestScrollView";

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
         }} />
     }

     handleClickSetting() {
         this.props.navigation.navigate('Setting');
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
             {id:7, title: 'ScrollView', screen: 'KYBScrollView'}
         ]
         return (
             <View style={styles.view}>
                 <Text>Me</Text>
                 <Button onPress={this.handleClickSetting.bind(this)} title={'Setting'}/>
                 {
                     buttons.map((item) => {
                         return <Button key={item.id} title={item.title} onPress={() => {
                             navigate(item.screen);
                         }}/>;
                     })
                 }
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
    KYBScrollView: { screen: TestScrollView }
});

 export default MeNavigator;