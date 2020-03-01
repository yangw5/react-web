/*
 * @File:
 * @Description:抽屉组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-24 17:07:32
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-24 17:51:39
 * @FilePath: \react-web\src\component\widget\basis\DrawerCustom.js
 */
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Drawer } from 'antd';

const DrawerCustom = (props, ref) => {
    const inDrawer = useRef(null);
    let [visible, setVisible] = useState(false);
    let showDrawer = () => {
        setVisible(true);
    };
    useImperativeHandle(ref, () => {
        return {
            showDrawer,
        };
    });
    let onClose = () => {
        props._close && props._close();
        setVisible(false);
    };
    return (
        <div>
            <Drawer
                title={props.title || '抽屉组件'}
                placement={props.placement || 'right'}
                closable={false}
                onClose={onClose}
                visible={visible}
                mask={props.mask || true}
                getContainer={props.getContainer || document.body}
                destroyOnClose={props.destroyOnClose || true}
                maskClosable={props.maskClosable || true}
            >
                {(props.childen && props.childen) || '暂无数据'}
            </Drawer>
        </div>
    );
};

export default forwardRef(DrawerCustom);
