import React, { Component } from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    Button,
    KeyboardAvoidingView
} from 'react-native';

export default class TestTextInput extends Component {
    static navigationOptions = {
        headerTitle: 'TextInput'
    };

    constructor(props) {
        super(props);
        this.state = {
            editable: true
        };
    }

    handleCancelFocus() {
        this.refs.textInput.clear();
    }
    render() {
        return (
            <View style={styles.view}>
                <TextInput
                    ref={'textInput'}
                    style={styles.textInput}
                    placeholderTextColor={'lightgray'}
                    placeholder={'please input some text'}
                    autoFocus={true}
                    editable={this.state.editable}
                    keyboardType={'numeric'}
                    maxLength={11}
                    selectionColor={'red'}
                />
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                    <Button title={'Focus'} onPress={() => {this.refs.textInput.focus();}}/>
                    <Button title={'Clear'} onPress={this.handleCancelFocus.bind(this)}/>
                </View>
                <KeyboardAvoidingView
                    style={styles.keyboardAvoidingView}
                    contentContainerStyle={{
                        backgroundColor: 'red',
                        height: 50,
                    }}
                    behavior={'position'}
                    keyboardVerticalOffset={64}
                >
                </KeyboardAvoidingView>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    textInput: {
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    keyboardAvoidingView: {
        bottom: -500
    }
});

/*
*  使用KeyboardAvoidingView时，如果有导航记得设置keyboardVerticalOffset -- 排除导航栏影响
* */