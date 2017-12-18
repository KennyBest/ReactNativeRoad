import React, { Component } from 'react';
import { View, DatePickerIOS } from 'react-native';

export default class BasicControl extends Component {
    static navigationOptions = {
        title: '基础控件',
        tabBarVisible: false
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                // DatePickerIOS
                <DatePickerIOS
                    date={Date.now()}
                    onDateChange={() => {

                    }}
                    mode={'date'}
                />
            </View>
        );
    }
}