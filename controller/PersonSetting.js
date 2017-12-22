import React, { Component } from  'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';

export default class PersonSetting extends Component<{}> {
    static navigationOptions = {
        title: 'Setting'
    };
    constructor(props) {
        super(props);
        this.state = {
            isNeedShow: false,
            showTitle: 'show'
        };
    }
    handlePresentScreen() {
         this.props.navigation.navigate('ModalStack');
    }
    render() {

        return (
            <View style={styles.view}>
                <Text>This is setting screen.</Text>
                <Button onPress={() => {this.props.navigation.goBack();}} title="Go Back" />
                <Button title={'Present Screen'} onPress={this.handlePresentScreen.bind(this)} />
                <Button title={this.state.showTitle + ' activityIndicator'} onPress={() => {
                    this.setState((preState) => {
                        return {
                            isNeedShow: !preState.isNeedShow,
                            showTitle: !preState.isNeedShow ? 'dismiss' : 'show'
                        };
                    });
                }}/>
                <ActivityIndicator color={'#aa00aa'} animating={this.state.isNeedShow}/>
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
        justifyContent: 'center',
        alignItems: 'center'
    }
});

