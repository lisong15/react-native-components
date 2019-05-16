/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import Btn from "./src/components/cbutton";
import Button from "react-native-cmbutton";
import Dialog from "./src/components/dialog";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class App extends Component {

    _onLeftClick = () => {
        // alert('_onLeftClick click in');
        this.setState({
            show: false
        })
    };

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show: false
        };
    }

    _onBtnB() {
        // alert('click btn in');
    };

    _onRightClick() {
        // alert('rightOnClick click in');
        this.setState({
            show: false
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => {
                    this.setState({show: true})
                }}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button onBtnClick={this._onBtnB}/>
                <Dialog isVisible={this.state.show}
                        textContent="确认退出么，点击确定将会退出喽"
                        leftBtnText={"cancel"} rightBtnText={"confirm"}
                        leftOnClick={this._onLeftClick}
                        rightOnClick={this._onRightClick} textContentAlign={"center"}
                        textContentVerticalAlign={"center"} textContentTextColor={'red'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
