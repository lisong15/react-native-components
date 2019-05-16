/**
 * Created by liyang on 16/12/21.
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Dimensions, Modal, PixelRatio, Text, TouchableOpacity, View} from "react-native";

/**
 * 默认居中显示
 */
export default class Dialog extends Component {
    static propTypes = {
        //弹框内容
        textContent: PropTypes.string.isRequired,
        //弹框内容文字颜色
        textContentTextColor: PropTypes.string,
        //弹框内容字体大小
        textContentTextSize: PropTypes.number,
        //弹框内容文本水平排列方式
        textContentAlign: PropTypes.oneOf(['left', 'center', 'right']),
        //弹框内容文本垂直排列方式
        textContentVerticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
        //弹框左边按钮文字
        leftBtnText: PropTypes.string,
        //弹框右边按钮文字
        rightBtnText: PropTypes.string,
        //弹框左边按钮文字大小
        leftBtnTextSize: PropTypes.number,
        //弹框右边按钮文字大小
        rightBtnTextSize: PropTypes.number,
        //弹框左边按钮文字颜色
        leftBtnTextColor: PropTypes.string,
        //弹框右边按钮文字颜色
        rightBtnTextColor: PropTypes.string,
        //弹框左边按钮响应函数
        leftOnClick: PropTypes.func.isRequired,
        //弹框右边边按钮响应函数
        rightOnClick: PropTypes.func.isRequired,
        //弹框是否显示
        isVisible: PropTypes.bool,
        //弹框左右靠屏幕边缘的padding
        marginLR: PropTypes.number,
        //弹框的四个圆角大小
        dialogRadius: PropTypes.number,
        //弹框的宽高比,例如：2，就是说宽高比式2：1
        dialogRatio: PropTypes.number,

    };
    static defaultProps = {
        textContent: '',
        leftBtnText: '取消',
        rightBtnText: '确定',
        isVisible: false,
        leftBtnTextSize: 16,
        rightBtnTextSize: 16,
        textContentTextSize: 16,
        dialogRadius: 10,
        marginLR: 30,
        dialogRatio: 1.5,
        textContentAlign: 'center',
        textContentVerticalAlign: 'center'
    };
    dp2px = (dp = 0) => {
        return (dp * (PixelRatio.get() / 1.5) + 0.5);
    };
    getWH = () => {
        return Dimensions.get('window');
    };

    // 构造方法
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        let {width: btnWidth} = this.getWH();
        return (<Modal animationType={'none'} onRequestClose={() => {
        }}
                       transparent={true} visible={this.props.isVisible}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000081',
                }}>
                <View
                    style={{
                        borderRadius: this.props.dialogRadius || this.dp2px(this.props.dialogRadius),
                        backgroundColor: '#fff',
                        width: this.props.btnWidth || btnWidth - this.props.marginLR,
                        height: this.props.btnHeight || (btnWidth - this.props.marginLR) / this.props.dialogRatio
                    }}>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <Text
                            style={{
                                color: this.props.textContentTextColor,
                                height: '100%',
                                width: '100%',
                                textAlign: this.props.textContentAlign,
                                textAlignVertical: this.props.textContentVerticalAlign,
                                fontSize: this.props.textContentTextSize || this.dp2px(this.props.textContentTextSize)
                            }}>{this.props.textContent}</Text>

                    </View>
                    <View style={{backgroundColor: '#d9d9d9', height: 1}}/>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={this.props.leftOnClick}
                                          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: this.props.leftBtnTextSize || this.dp2px(this.props.leftBtnTextSize),
                                color: this.props.leftBtnTextColor
                            }}>
                                {this.props.leftBtnText}
                            </Text>
                        </TouchableOpacity>

                        <View style={{backgroundColor: '#d9d9d9', width: 1}}/>
                        <TouchableOpacity onPress={this.props.rightOnClick}
                                          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: this.props.rightBtnTextSize || this.dp2px(this.props.rightBtnTextSize),
                                color: this.props.rightBtnTextColor
                            }}>
                                {this.props.rightBtnText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>)
    }
}
