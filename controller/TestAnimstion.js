import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet
} from 'react-native';

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
        widthAnimation: new Animated.Value(250),
    };

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
        Animated.timing(
            this.state.widthAnimation,
            {
                toValue: 300,
                duration: 3*1000
            }
        ).start();
    }
    render() {
        let { fadeAnim } = this.state;
        let { widthAnimation } = this.state;
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                    width: widthAnimation
                }}
                >
                { this.props.children }
            </Animated.View>
        );
    }
}

export default class Animation extends Component {
    static navigationOptions = {
        headerTitle: 'Animation'
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        );
    }
}

