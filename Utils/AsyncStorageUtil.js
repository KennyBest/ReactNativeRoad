import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';

export default class AsyncStorageUtil extends Component {
    // save
    static async setItem(key: string, value: string) {
        await AsyncStorage.setItem(key, value);
    }

    // get
    static async getItem(key: string, callBlock: (ret: string) => void) {
        await AsyncStorage.getItem(key, (error, result) => {
            callBlock(result);
        });
    }

    // delete
    static async removeItem(key: string) {
         await AsyncStorage.removeItem(key);
    }
}