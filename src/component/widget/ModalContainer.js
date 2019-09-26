import React, { Component } from 'react';
import { Modal } from 'antd';
// import classnames from 'classnames';

class ModalContainer extends Component {
    state = {
        visible: this.props.visible,
    };
    componentDidUpdate(preProps, preState) {
        const { visible } = this.state;
        // 打开弹层后的调用
        if (visible && visible !== preState.visible) {
            const { onOpen } = this.props;
            onOpen && onOpen();
        }
    }
    _handleOk = () => {
        const { onOk, beforeOk, autoClose } = this.props;
        if (beforeOk && !beforeOk()) return;
        autoClose && autoClose();
        onOk && onOk();
    };
    _handleCancel = () => {
        const { onCancel } = this.props;
        onCancel && onCancel();
        this._close();
    };
    _open = () => {
        this.setState({ visible: true });
    };
    _close = () => {
        const { onClose } = this.props;
        onClose && onClose();
        this.setState({ visible: false });
    };
    render() {
        let { visible } = this.state;
        let { children, title, style, ...restProps } = this.props;
        return (
            <Modal
                {...{
                    visible,
                    title,
                    style,
                    ...restProps,
                }}
                onOk={this._handleOk}
                onCancel={this._handleCancel}
                width={style && style.width ? style.width : 946}
            >
                <div>{children}</div>
            </Modal>
        );
    }
}
export default ModalContainer;
