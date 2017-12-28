import React, { Component } from 'react';
import {
    View,
    Button,
    Image,
    Text,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';

export default class TestCustomTouch extends Component {
    static navigationOptions = {
        headerTitle: 'TouchableHighlight'
    };
    _onPressButton = () => {
        Alert.alert(
            'Prompt',
            'click touchablehighlight ',
            [
                {text: 'OK'}
            ]
        );
    };
    render() {
        return (
            <View style={styles.view}>
                <Text>Sample TouchableHighlight</Text>
                <TouchableHighlight
                    style={[styles.topMargin]}
                    onPress={this._onPressButton}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                >
                    <Text>TouchableHighlight Text</Text>
                </TouchableHighlight>
                <Text style={styles.topMargin}>TouchableWithoutFeedback, 不建议用，任何可点击控件在被点击的时候都应有一个实际的反馈</Text>
                <Text>其实TouchableHighlight和TouchableOpacity都是基于TouchableWithoutFeedBack来定制的，类似于原生中在一个view上加响应手势操作。RN里面Button组件不可修改字体大小，以及图片文字偏移量。实际使用更多是自定义TouchableHighlight来搞。</Text>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    },
    topMargin: {
        marginTop: 10,
    }
});