### 1. 通用button   
![image](https://github.com/lisong15/react-native-components/blob/master/imgs/button.png?raw=true)
### how to install ?
`npm install react-native-common_button --save`
or use yarn
`yarn add react-native-common_button`

### how to use
```
import Btn from 'react-native-common_button'
 _onBtnB() {
        alert('Btn click in');
    };
<Btn onBtnClick={this._onBtnB}/>
```

more props are follows:
```
btnText: string,
btnColor: object,
btnWidth: number,
btnHeight: number,
btnRadius: number,
btnTextSize: number,
btnTextColor: object,
onBtnClick: func.isRequired
```
***
### 2. 通用dialog   
![image](https://github.com/lisong15/react-native-components/blob/master/imgs/dialog.png?raw=true)
### how to install ?
`npm install react-native-ldialog --save`
or use yarn
`yarn add react-native-ldialog`

### how to use
```
import Dialog from "./src/components/dialog";

    _onLeftClick = () => {
        // alert('_onLeftClick click in');
        this.setState({
            show: false
        })
    };
    
     _onRightClick() {
         // alert('rightOnClick click in');
         this.setState({
             show: false
         })
     };
     
<Dialog isVisible={this.state.show}
        textContent="你好dialog"
        leftBtnText={"取消"} rightBtnText={"确定"}
        leftOnClick={this._onLeftClick}
        rightOnClick={this._onRightClick} textContentAlign={"center"}
        textContentVerticalAlign={"center"} textContentTextColor={'red'} />
```

more props are follows:
```
//弹框内容
textContent: string,    //必须
//弹框内容文字颜色
textContentTextColor: string,
//弹框内容字体大小
textContentTextSize: number,
//弹框内容文本水平排列方式
textContentAlign: ['left', 'center', 'right'],
//弹框内容文本垂直排列方式
textContentVerticalAlign: ['top', 'center', 'bottom'],
//弹框左边按钮文字
leftBtnText: string,
//弹框右边按钮文字
rightBtnText: string,
//弹框左边按钮文字大小
leftBtnTextSize: number,
//弹框右边按钮文字大小
rightBtnTextSize: number,
//弹框左边按钮文字颜色
leftBtnTextColor: string,
//弹框右边按钮文字颜色
rightBtnTextColor: string,
//弹框左边按钮响应函数
leftOnClick: func,      //必须
//弹框右边边按钮响应函数
rightOnClick: func,     //必须 
//弹框是否显示
isVisible: bool,
//弹框左右靠屏幕边缘的padding
marginLR: number,
//弹框的四个圆角大小
dialogRadius: number,
//弹框的宽高比,例如：2，就是说宽高比式2：1
dialogRatio: number
```
THANKS PALS ~
