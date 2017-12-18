import React,{ Component } from 'react';
import { View, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
 class LoginScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Login</Text>
                <Button title={'dismiss'} onPress={() => {this.props.navigation.goBack();}}/>
            </View>
        );
    }
}

const ModalStack = StackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
    },
    {
        mode: 'modal'
    }
);

 export default ModalStack;

 // 嵌套导航怎么以modal方式推出一个新的导航