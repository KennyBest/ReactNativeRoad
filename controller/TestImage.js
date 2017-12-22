import React, { Component } from 'react';
import { Image, View, StyleSheet, Button, Alert } from 'react-native';

var images =  [
    'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg',
    'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2265761240.jpg',
    'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2266110047.jpg'
];

export default class TestImage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Image'
    };

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    handleGoForward() {
        if (this.state.currentIndex === 0) {
            Alert.alert(
                'Warning',
                'This is the begin of images.',
                [
                    {text: 'OK'}
                ]
            );
            return;
        }
        this.setState((state) => {
            return {
              currentIndex: (state.currentIndex - 1)
            };
        });
    }

    handleGoBackward() {
        if (this.state.currentIndex === (images.length - 1)) {
            Alert.alert(
                'Warning',
                'This is the end of images.',
                [
                    {text: 'OK'}
                ]
            );
            return;
        }
        this.setState((state) => {
            return {
                currentIndex: (state.currentIndex + 1)
            };
        });
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                <Image source={require('./../images/home.png')} tintColor={'red'}/>
                <Image style={styles.image}
                       source={{uri: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=0bf277676859252da3171c04049b032c/2fdda3cc7cd98d10d3e2994c293fb80e7bec909d.jpg'}}/>
                <View style={styles.containerView}>
                    <Button title={'前一张'} onPress={this.handleGoForward.bind(this)}/>
                    <Image style={styles.image2} source={{uri: images[this.state.currentIndex]}}
                           borderRadius={5}
                           backfaceVisibility={'visible'}
                    />
                    <Button title={'后一张'} onPress={this.handleGoBackward.bind(this)}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 100,
        height: 100
    },
    containerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image2: {
        width: 100,
        height: 100,
        transform: [{rotateX: '10deg'}]
    },

});

/* Q ~~~
*  如果使用Image,一定设置好图片的话，比例缩放时如何设置。
*  修改了子组件的justifyContent后不起作用。
* */
