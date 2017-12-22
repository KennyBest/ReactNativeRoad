import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    RefreshControl,
    Dimensions,
    StyleSheet
} from 'react-native';
var { height, width, scale } = Dimensions.get('window');
export default class TestScrollView extends Component {
    static navigationOptions = {
        headerTitle: 'ScrollView'
    };

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            stickyHeaderIndices: null
        };
    }

    onRefresh() {
        this.setState({
            refreshing: true
        });
        setTimeout(() => {
            this.setState({
                refreshing: false
            });
        }, 5 * 1000);
    }

    onScroll(e) {
        let childs;
       if (e.nativeEvent.contentOffset.y >= 100) {
           childs = [0];
       } else {
           childs = null;
       }
       this.setState({
           stickyHeaderIndices: childs
       });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    ref={'scrollView'}
                    contentContainerStyle={styles.contentContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            title={'刷新~~~~'}
                        />
                    }
                    stickyHeaderIndices={this.state.stickyHeaderIndices}
                    onScroll={this.onScroll.bind(this)}
                >
                    {/* 横向scrollView*/}
                    <ScrollView
                        style={{height: 100, marginTop: 10, marginLeft: 0, marginRight: 0, backgroundColor: 'white'}}
                        contentContainerStyle={styles.horizontalContentContainer}
                        pagingEnabled={true}
                        showHorizontalScrollIndicator={false}
                        horizontal={true}
                    >
                        <View style={[{backgroundColor: 'red'}, styles.horizontalContentView]}>

                        </View>
                        <View style={[{backgroundColor: 'blue'}, styles.horizontalContentView]}>

                        </View>
                        <View style={[{backgroundColor: 'orange'}, styles.horizontalContentView]}>

                        </View>
                    </ScrollView>

                    <View style={styles.color}>
                    </View>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>
                    <View style={[styles.color, {marginTop: 10}]}/>

                </ScrollView>

                <Button style={{right: width - 60, bottom: height - 50}} title={'Bottom'} onPress={() => {
                    this.refs.scrollView.scrollToEnd();
                }
                }/>
                <Button style={{marginBottom: -10, marginRight: 0}} title={'Top'} onPress={() => {
                    this.refs.scrollView.scrollTo({y: 0, x: 0});
                }
                }/>
            </View>
        );
    }
    componentWillUnmount() {

    }
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1
    },
    contentContainer: {

    },
    color: {
        backgroundColor: 'green',
        height: 100
    },
    redColor: {
        backgroundColor: 'red',
        height: 100,
        marginTop: 10
    },
    horizontalContentContainer: {
        margin: 0,
        width: width * 3,
    },
    horizontalContentView: {
        marginBottom: 0,
        marginTop: 0,
        width: width
    }
});

/*
*  可以设置stickyHeaderIndices 让scrollView的子元素悬浮
*  利用scrollView的方法控制stickyHeaderIndices属性， 为null时没有悬浮效果
* */