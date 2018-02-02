import React, { Component } from 'react';
import {
    CameraRoll,
    View,
    Button,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';

export default class TestCameraRoll extends Component {

    static navigationOptions = {
        headerTitle: 'CameraRoll'
    };

    state = {
      photos: []
    };

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
        })
            .then(r => {
                this.setState({ photos: r.edges});
            })
            .catch((err) => {
                // Error
            });
    };

    // 保存图片
    _handleSaveImage = () => {
        let path = 'http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg';
        // 类型如果为photo时， CameraRoll.saveImageWithTag(path);
        CameraRoll.saveToCameraRoll(path, 'photo');
    };

    render() {
        return (
            <View>
                <Button title={'Load Images'} onPress={this._handleButtonPress} />
                <Button title={'Save Image'} onPress={this._handleSaveImage}/>
                <ScrollView>
                    { this.state.photos.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 300,
                                    height: 100,
                                    margin: 10
                                }}
                                source={{ uri: p.node.image.uri }}
                            />
                        );
                    })
                    }
                </ScrollView>
            </View>
        );
    }
}
