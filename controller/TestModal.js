import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Modal,
    DeviceEventEmitter,
    StyleSheet
} from 'react-native';
import LoginStack from './LoginNavigationStack';

export default class ModalView extends Component {
    static navigationOptions = {
        headerTitle: 'Modal'
    };

    constructor(props) {
        super(props);
        this._handleShowModal = this.handleShowModal.bind(this);
        this.state = {
            visible: false,
            modal2Visible: false
        };
    }

    handleShowModal() {
        this.setState((state) => {
            return {visible: !state.visible};
        });
    }

    presentModal() {
        this.setState((state) => {
            return {modal2Visible: !state.modal2Visible};
        });
    }
    render() {
        return (
            <View style={styles.flex}>
                <Text>Modal实例提示</Text>
                <Button title={'Present A NavigationStack'} onPress={this._handleShowModal}/>
                <Button title={'Present Over FullScreen'} onPress={this.presentModal.bind(this)}/>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.visible}
                    presentationStyle={'fullScreen'}
                    style={styles.modalStyle}
                >
                    <LoginStack />
                    {/*<View style={styles.modalContainerStyle}>*/}
                        {/*<View style={styles.modalContentStyle}>*/}
                            {/*<Text>Modal视图</Text>*/}
                            {/*<Button title={'Dismiss'} onPress={this._handleShowModal}/>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                </Modal>
                {/* ----- 透明modal ---- */}
                <Modal
                    visible={this.state.modal2Visible}
                    animationType={'fade'}
                    presentationStyle={'overFullScreen'}
                    transparent={true}
                >
                    <View style={styles.modalContainerStyle}>
                        <View style={[styles.modalContentStyle, styles.modal2ColorStyle]}>
                            <Text style={{ margin: 12 }}>新人大礼包，是否现在领取</Text>
                            <View style={styles.modal2ContentStyle}>
                                <Button style={[styles.button, styles.modal2ColorStyle]} title={'先观望一下'} color={'black'} onPress={this.presentModal.bind(this)}/>
                                <Button style={[styles.button, styles.modal2ColorStyle]} title={'领取'} color={'black'} onPress={this.presentModal.bind(this)}/>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

    componentDidMount() {
        this.dismissLoginStackObserver = DeviceEventEmitter.addListener('dismissLoginStack', () => {
           this.setState((state) => {
               return {visible: false};
           });
        });
    }

    componentWillUnmount() {
        this.dismissLoginStackObserver.remove();
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    modalStyle: {
        justifyContent: 'center'
    },
    modalContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContentStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal2ContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal2ColorStyle: {
        borderWidth: 1,
        borderColor: 'skyblue'
    },
    button: {
        fontSize: 15,
        color: 'black'
    }
});

/*
*  Modal方式推出界面传递方式
*  1. 使用通知
*  2. 如果通过属性来传递怎么搞？能不能像iOS原生处理，在presented controller直接dismiss？
* */