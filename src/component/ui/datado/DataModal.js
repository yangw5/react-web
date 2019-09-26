/*
 * Created: 2019-09-16 08:43:29
 * Author : yang5
 * Email : yangw5@163.com
 * -----
 * Description: 自定义弹框  只用于显示 不处理逻辑
 */


import React, { Component } from 'react';
import { Modal } from 'antd';
import './DataModal.less'
class DataModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
        };
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    _open = () => {
        this.setState({
            visible: true,
        });
    };
    render() {
        let { title = 'Basic Modal', children } = this.props;
        return (
            <Modal
                title={title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <div>{children}</div>
            </Modal>
        );
    }
}
export default DataModal;
