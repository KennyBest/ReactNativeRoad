import React,{ Component } from 'react';
import { View, Button, Text, DeviceEventEmitter } from 'react-native';

class LoginScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Login',
        headerLeft: <Button title={'Dismiss'} onPress={() => {
            DeviceEventEmitter.emit('dismissLoginStack');
        }}/>
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Login</Text>
                <Button title={'dismiss'} onPress={() => {
                    this.props.navigation.goBack();
                }}/>
            </View>
        );
    }
}

export default LoginScreen;

// 嵌套导航怎么以modal方式推出一个新的导航