import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, AlertIOS } from  'react-native';
import PersonSetting from './PersonSetting';
import ModalStack from './Login';
import BasicControl from './BasicControl';

import { StackNavigator } from 'react-navigation';

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
        return (
            <View style={styles.view}>
                <Text>Me</Text>
                <Button onPress={this.handleClickSetting.bind(this)} title={'Setting'}/>
                <Button title={'Basic Control'} onPress={() => {
                    this.props.navigation.navigate('MapView');
                }}/>
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
    MapView: { screen: BasicControl}
});

 export default MeNavigator;