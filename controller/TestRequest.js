import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class RequestUtil extends Component {
    constructor(props) {
        super(props);
    }

    static getRequest(url, params, successBlock: (responseData: { string: void }) => void, failureBlock: (error: Error) => void) {
        let header = new Headers();
        let httpInit = {
            method: 'GET',
            header: header,
        };
        fetch(url, httpInit).then(function (response) {
            if (response.ok) {
                return response.blob();
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
    }

}

export default class CustomRequest extends Component {
    static navigationOptions = {
        headerTitle: '网络请求'
    };

    _test() {
        setTimeout()
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
        request.open('GET', 'https://httpbin.org/get');
        request.send();
    };
    _onPressFetch = () => {
        RequestUtil.getRequest('https://httpbin.org/get', null, (responseData) => {
            alert('Success');
        }, (error) => {
            alert('Failure,' + error.message);
        });
        /*
        fetch('https://httpbin.org/get')
            .then(function (data) {
                return data.text();
            })
            .then((responseText) => {
                alert('success');
                }
            )
            .catch((error) => {
               alert('failure');
            });
            */
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
                <RequestUtil/>
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