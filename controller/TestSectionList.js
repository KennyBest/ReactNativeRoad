import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    SectionList,
    StyleSheet
} from 'react-native';

let data1 = [
    {id: 1, name: 'limei1'},
    {id: 2, name: 'limei2'},
    {id: 3, name: 'limei3'}
];
let data2 = [
    {id: 1, name: 'hanleilei1'},
    {id: 2, name: 'hanleilei2'},
    {id: 3, name: 'hanleilei3'}
];
let data3 = [
    {id: 1, name: 'Ateman1'},
    {id: 2, name: 'Ateman2'},
    {id: 3, name: 'Ateman3'}
];

class ListItem extends Component {
    render() {
        return (
            <Text>{this.props.info.name}</Text>
        );
    }
}

function Header(props) {
    return (
        <Text>{props.title}</Text>
    );
}

export default class MySectionList extends Component {
    static navigationOptions = {
        headerTitle: 'SectionList'
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({
            refreshing: true
        });
        setTimeout(() => {
            this.setState({
                refreshing: false
            });
        }, 3 * 1000);
    };
    render() {
        return (
            <View style={styles.view}>
                <Text>SectionList</Text>
                <SectionList
                    key
                    renderItem={({item}) => <ListItem info={item} />}
                    renderSectionHeader={({section}) => <Header title={section.title} />}
                    keyExtractor={(item, index) => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    sections={[
                        {data: data1, title: '第1分区', id: 1},
                        {data: data2, title: '第2分区', id: 2},
                        {data: data3, title: '第3分区', id: 3},
                    ]}
                />
            </View>
            );
    }
}

let styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center'
    },
});