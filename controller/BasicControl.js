import React, { Component } from 'react';
import { View, DatePickerIOS, Button, Alert, Picker, ProgressViewIOS, Text } from 'react-native';

/*
*  DatePickerIOS 没有默认大小
* */
class KYBDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        };
    }
    maxDate(n) {
        let tmpDate = new Date();
        tmpDate.setFullYear(tmpDate.getFullYear() + n);
        return tmpDate;
    }
    render() {
        return <DatePickerIOS
            style={{
                width: 300,
                backgroundColor: 'skyblue'
            }}
            date={this.state.date}
            onDateChange={(date) => {
                this.setState({
                    date: date
                });
                this.props.handleDateChange(date);
            }}
            mode={'date'}
            maximumDate={this.maxDate(10)}
        />;
    }
}

/*Picker*/
class KYBItemSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: ''
        };
    }

    handleSelectedItemChange(value, index) {
        this.setState({
            selectedItem: value
        });
        this.props.onHandleSelect(value);
    }

    render() {

        return (
            <Picker
                selectedValue={this.state.selectedItem}
                onValueChange={this.handleSelectedItemChange.bind(this)}
                style={{
                    height: 210,
                    width: 300
                }}
            >
                {
                    /* 这种写法报TypeError：undefined is not an object(evaluating element.type.displayName)*/
                    /*this.props.source.map((item, index, arr) => {
                        return <Picker.item label={item} value={item}/>;
                    })*/
                    // 这种写法是可以的
                    this.props.source.map((item, index, a) => <Picker.Item key={index} label={item} value={item} />)
                }
            </Picker>
        );
    }
}

export default class BasicControl extends Component {
    static navigationOptions = {
        title: '基础控件',
        tabBarVisible: false
    };
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            progress: 0.5
        };
    }

    handleDateChange(date) {
        this.setState({
            date: date
        });
        Alert.alert(
            null,
            date.toString(),
            [
                {text: 'OK'}
            ]
        )
    }

    handlePickerSelect(item) {
        Alert.alert(
            'Tip',
            'You select ' + item,
            [
                {text: 'OK'}
            ]
        );
    }

    render() {
        let array = ['java', 'C#', 'C++', 'Swift', 'Object-C'];
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <KYBDatePicker date={this.state.date} handleDateChange={this.handleDateChange.bind(this)} />
                <KYBItemSelect source={array} onHandleSelect={this.handlePickerSelect.bind(this)} />
                <Text style={{marginTop: 12}}>ProgressViewIOS</Text>
                <ProgressViewIOS
                    style={{
                        marginTop: 10,
                        marginLeft: 12,
                        marginRight: 12,
                        width: 200
                    }}
                    progress={this.state.progress}
                    progressTintColor={'red'}
                    progressViewStyle={'default'}
                    trackTintColor={'blue'}
                />
            </View>
        );
    }
}

