/*
 * @File:
 * @Description:自定义弹框基础组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-09 17:30:19
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 15:17:10
 * @FilePath: \react-web\src\component\ui\datado\DataModal.js
 */

import React, { Component } from 'react';
import { Modal } from 'antd';
import './DataModal.less';
class DataModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
        };
    }
    handleOk = () => {
        let { _onSubmit } = this.props;
        _onSubmit && _onSubmit();
    };
    handleCancel = () => {
        let { _onCancel } = this.props;
        _onCancel && _onCancel();
        this.setState({
            visible: false,
        });
    };
    _open = () => {
        this.setState({
            visible: true,
        });
    };
    _onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        let {
            title = 'Basic Modal',
            children,
            destroyOnClose = true,
            footer,
            keyboard = true,
            width = 520,
            ...resprops
        } = this.props;
        return (
            <Modal
                title={title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                destroyOnClose={destroyOnClose}
                footer={footer}
                keyboard={keyboard}
                width={width}
                {...resprops}
            >
                <div>{children}</div>
            </Modal>
        );
    }
}
export default DataModal;
