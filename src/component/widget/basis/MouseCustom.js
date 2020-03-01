/*
 * @File:
 * @Description:鼠标右键功能的封装
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-25 09:53:38
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 16:18:12
 * @FilePath: \react-web\src\component\widget\basis\MouseCustom.js
 */
import React from 'react';
const MouseCustom = props => {
    let downOclick = e => {
        if (e.button === 0) {
            alert('你点了左键');
            props.MouseRight && props.MouseRight();
        } else if (e.button === 2) {
            // alert('你点了右键');
            if (props.menu) {
                //自定义菜单
                e.preventDefault(); //做一些兼容性的处理
                //获取我们自定义的右键菜单
                // var menu = document.querySelector('#menu');

                // //根据事件对象中鼠标点击的位置，进行定位
                // menu.style.left = e.clientX + 'px';
                // menu.style.top = e.clientY + 'px';
                // //改变自定义菜单的宽，让它显示出来
                // menu.style.width = '125px';
            } else props.MouseLeft && props.MouseLeft();
        } else if (e.button === 1) {
            alert('你点了滚轮');
            props.MouseSlide && props.MouseSlide();
        }
    };
    // //关闭右键菜单，很简单
    // window.onclick = function(e) {
    //     //用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
    //     document.querySelector('#menu').style.height = 0;
    // };
    return (
        <div
            onMouseDown={e => {
                downOclick(e);
            }}
        >
            {props.children}
        </div>
    );
};
export default MouseCustom;
