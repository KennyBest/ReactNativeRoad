import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Button,
    StyleSheet
} from 'react-native';

class FadeInView extends React.Component {
   // 这种方式比在constructor中设置state快捷
    state = {
        fadeAnim: new Animated.Value(0),
        widthAnimation: new Animated.Value(250),
    };

    componentDidMount() {
        // timing(value, config)  第一个参数为初始值，第二个参数为动画配置
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
    state = {
        widthAnimation: new Animated.Value(100),
        goTitle: 'Go',
        translateXAnimation: new Animated.Value(0),
        isConverse: false,
        isReverse: false,
        decayAnimation: new Animated.Value(0)
    };

    _onMakeBig = () => {
        let { widthAnimation } = this.state;
        Animated.timing(
            widthAnimation,
            {
                toValue: 200,
                duration: 2*1000,
                delay: 1*1000,
            }
        ).start();
    };

    _onMakeSmall = () => {
      let { widthAnimation } = this.state;
      Animated.timing(
          widthAnimation,
          {
              toValue: 100,
              duration: 2 * 1000,
          }
      ).start();
    };

    _onGO = () => {
        let animation = this.state.translateXAnimation;
        Animated.spring(
            animation,
            {
                toValue: this.state.isConverse ? 0 : 150,
                duration: 4*1000,
            }
        ).start();
        this.setState((state) => {
            return {
                isConverse: !state.isConverse,
                goTitle: !state.isConverse ? 'Back' : 'Go'
            };
        });
    };

    _onDecay = () => {
        let animation = this.state.decayAnimation;
        Animated.decay(
            animation,
            {
                toValue: this.state.isReverse ? 0 : 100,
                velocity: 0.1
            }
        ).start();
        this.setState((state) => {
            return {
                isReverse: !state.isReverse
            };
        });
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text>Timing</Text>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue', justifyContent: 'center'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Animated.View
                        style={{ height: 100, marginTop: 12, width: this.state.widthAnimation, backgroundColor: 'red',

                        }}
                    >
                    </Animated.View>
                    <Button title={'Make Big'} onPress={this._onMakeBig}/>
                    <Button title={'Make Small'} onPress={this._onMakeSmall}/>
                </View>
                <Text>Spring</Text>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Button title={this.state.goTitle} onPress={this._onGO} />
                    <Animated.View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'green',
                            transform: [
                                {translateX: this.state.translateXAnimation}
                            ]
                        }}
                    >
                    </Animated.View>
                </View>
                <Text style={{marginTop: 12, marginBottom: 12}}>decay 减速 就是把初速度消损到0的过程</Text>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Button title={'Decay'} onPress={this._onDecay} />
                    <Animated.View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'yellow',
                            transform: [
                                { translateX: this.state.decayAnimation }
                            ]
                        }}
                    >
                    </Animated.View>
                </View>
            </View>
        );
    }
}

/*
 View Text Image ScrollView
*  动画执行顺序分sequence串行和parallel并行，组合里面的动画任意一个被停止或被打断，其它动画也会被打断。
*  动画混合转换 add(a, b)  divide(a, b)  multiply(a, b)  modulo()
*
*  interpolate(params)处理 类似于iOS的keyFrame动画
*  {
*       inputRange: [0, 1],
*       outputRange: [150, 0]
*  }
* */