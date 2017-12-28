import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import EnvironmentConfig from './EnvironmentConfig';

class RequestUtil extends Component {
    constructor(props) {
        super(props);
    }

    static getRequest(url, params, successBlock: (responseData: Object) => void, failureBlock: (error: Error) => void) {
        let httpInit = {
            method: 'GET',
        };
        fetch(url, httpInit).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then(function (responseData) {
            if (successBlock !== undefined) {
                successBlock(responseData);
            }
        }).catch(function (error) {
            // 处理错误
            if (failureBlock !== undefined) {
                failureBlock(error);
            }
        });
    };

    static postRequest(url, params, successBlock:((responseData) => void), failureBlock: (error: Error) => void) {
        let header = new Headers();
        let httpInit = {
            method: 'POST',
            header: header,
        };
        fetch(url, httpInit).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then(function (responseData) {
            if (successBlock !== undefined) {
                successBlock(responseData);
            }
        }).catch(function (error) {
            // 处理错误
            if (failureBlock !== undefined) {
                failureBlock(error);
            }
        });
    };

    render() {
        return (
            <View/>
        );
    }
}

export default class CustomRequest extends Component {
    static navigationOptions = {
        headerTitle: '网络请求'
    };

    constructor(props) {
        super(props);
        this.state = {
            token: EnvironmentConfig.token
        };
    }
    _onPressXMLRequest = () => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                alert('请求成功');
            } else {
                alert('请求失败');
            }
        };
        request.open('GET', 'http://www.sojson.com/api/qqmusic/8446666');
        request.send();
    };
    _onPressFetch = () => {
        RequestUtil.getRequest('https://facebook.github.io/react-native/movies.json', null, (responseData) => {
            alert('Success: ' + JSON.stringify(responseData));
        }, (error) => {
            alert('Failure,' + error.message);
        });
    };
    _onPressPostFetch = () => {
        RequestUtil.postRequest('http://www.hangge.com/jsonData.php', null, (responseData) => {
            alert('request success : ' + responseData.toString());
        }, (error) => {
            alert('Failure,' + error.message);
        });
    };
    _onChangeToken = () => {
        EnvironmentConfig.token = 'Hello, kennyBest';
        this.setState({
            token: EnvironmentConfig.token
        });
    };
    _onClean = () => {
        EnvironmentConfig.token = '';
        this.setState({
            token: EnvironmentConfig.token
        });
    };
    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    underlayColor={'transparent'}
                    onPress={this._onPressXMLRequest}
                >
                    <Text style={{marginLeft: 5, marginRight: 5}}>XMLRequest</Text>
                </TouchableHighlight>
                <Button
                    style={{marginTop: 10}}
                    title={'Fetch'}
                    onPress={this._onPressFetch}
                />
                <Button
                    style={{marginTop: 10}}
                    title={'PostFetch'}
                    onPress={this._onPressPostFetch}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Button
                        style={{marginTop: 10, borderWidth: 1, borderColor: 'blue'}}
                        title={'change token ' + this.state.token}
                        onPress={this._onChangeToken}
                    />
                    <Button
                        style={{marginTop: 10, borderWidth: 1, borderColor: 'blue'}}
                        title={'clean'}
                        onPress={this._onClean}
                    />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center'
    },
    touchableHighlight: {
        margin: 12,
        borderWidth: 1,
        borderColor: 'black',
        height: 30,
        justifyContent: 'center'
    }
});

// RequestInfo Request | String
/*
*  interface Request extends Object, Body {
readonly cache: RequestCache;
readonly credentials: RequestCredentials;
readonly destination: RequestDestination;
readonly headers: Headers;
readonly integrity: string;
readonly keepalive: boolean;
readonly method: string;
readonly mode: RequestMode;
readonly redirect: RequestRedirect;
readonly referrer: string;
readonly referrerPolicy: ReferrerPolicy;
readonly type: RequestType;
readonly url: string;
clone(): Request;
}
* */
/* 配置项
interface RequestInit {
    body?: any;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: Headers | string[][];
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;
}
*/
/*
* 第一个参数为url，第二个参数为http配置项
*
*/

// fetch(input: RequestInfo, init?: RequestInit): Promise<Response>