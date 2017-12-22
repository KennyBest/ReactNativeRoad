import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

class SmapleFlatList extends Component {
    render() {
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        );
    }
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? 'red' : 'black';
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{color: textColor}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

/*头部组件*/
class CustomHeader extends Component {
    render() {
        return (
            <Text style={{textAlign: 'center', color: 'red'}}>"Custom header for FlatList"</Text>
        );
    }
}

class MultiSelectList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
           selected: new Map(),
            isRefreshing: false
        };
    }

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id));
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    _refreshing = () => {
        this.setState((preState) => {
            return {isRefreshing: !preState.isRefreshing};
        });
        setTimeout(() => {
            this.setState((preState) => {
                return {isRefreshing: !preState.isRefreshing};
            });
        }, 1500);
    };

    // 创建分割视图
    _separator = () => {
        return <View style={{
            backgroundColor: 'black',
            height: 1
        }}>
        </View>;
    };

    _header = () => {
        return (
            <Text style={{textAlign: 'center', color: 'red', backgroundColor:'skyblue', textAlignVertical: 'center'}}>"Custom header for FlatList"</Text>
        );
    };

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._separator}
                horizontal={false}
                onRefresh={this._refreshing}
                refreshing={this.state.isRefreshing}
                ListHeaderComponents={this._header}
            />
        );
    }
}

export default class TestFlatList extends Component {
    static navigationOptions = {
        headerTitle: 'FlatList'
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                {/*<SmapleFlatList style={{flex: 1}} />*/}
                <Text>{'FlatList use arrow func to handle data'}</Text>
                <MultiSelectList data={[
                    {id: 1, title: 'Hello01'},
                    {id: 2, title: 'Hello02'},
                    {id: 3, title: 'Hello03'},
                    {id: 4, title: 'Hello04'},
                    {id: 5, title: 'Hello05'}
                ]}  />
            </View>
        );
    }
}