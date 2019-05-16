/**
 * Created by lisong on 19/05/15.
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {PixelRatio, Text, TouchableOpacity, View} from "react-native";


export default class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        btnText: PropTypes.string,
        btnColor: PropTypes.object,
        btnWidth: PropTypes.number,
        btnHeight: PropTypes.number,
        btnRadius: PropTypes.number,
        btnTextSize: PropTypes.number,
        btnTextColor: PropTypes.object,
        onBtnClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        btnText: '确定',
        btnColor: '#fff',
        btnTextColor: '#000',
        btnRadius: 5,
        btnHeight: 48,
        btnWidth: 48 * 3,
        btnTextSize: 16,

    };


    dp2px = (dp = 0) => {
        return (dp * (PixelRatio.get() / 1.5) + 0.5);
    };

    _onButtonClick = () => {
        this.props.onBtnClick && this.props.onBtnClick();
    };


    render() {
        return (<View>
            <TouchableOpacity
                onPress={this._onButtonClick}
                style={{
                    borderRadius: this.props.btnRadius || this.dp2px(this.props.btnRadius),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: this.props.btnHeight || this.dp2px(this.props.btnHeight),
                    width: this.props.btnWidth || this.dp2px(this.props.btnWidth),
                    backgroundColor: this.props.btnColor
                }}>
                <Text
                    style={[{
                        fontSize: this.props.btnTextSize || this.dp2px(this.props.btnTextSize),
                        color: this.props.btnTextColor
                    }]}>{this.props.btnText}</Text>
            </TouchableOpacity>
        </View>)
    }
}
