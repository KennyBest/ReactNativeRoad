import React, { Component } from 'react';
import {
    WebView,
    View
} from 'react-native';

export default class TestWebView extends Component {

    static navigationOptions = {
        title: 'WebView'
    };
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <WebView
                    source={{uri: 'https://www.baidu.com'}}
                    style={{
                        marginTop:10,
                        backgroundColor: 'green',
                        flex: 1
                    }}
                />
            </View>
        );
    }
}
