/*
 * @File:
 * @Description:自定义form弹框组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 14:55:36
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 14:57:11
 * @FilePath: \react-web\src\component\widget\modal\DataForm.js
 */
import React, { Component } from 'react';
import DataModal from './DataModal';
import { Form } from 'antd';
import { DataEdit } from '../../widget/index';

class DataForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    _open = () => {
        this.dataModal._open();
    };
    onSubmit = () => {
        let { _onSubmit, form, beforeSubmit } = this.props;
        form.validateFieldsAndScroll((err, values) => {
            if (err) {
                console.log('验证未通过');
                return;
            } else {
                //提交前
                beforeSubmit && beforeSubmit(values);
                //提交
                _onSubmit && _onSubmit(values);
                this.dataModal._onClose();
            }
        });
    };
    render() {
        let { config, _onCance } = this.props;
        let { dataConfig, title, destroyOnClose } = config;
        let props = {
            ...this.props,
        };
        if (typeof this.props.getInstance === 'function') {
            props.ref = props.getInstance;
        }
        return (
            <div>
                <DataModal
                    ref={dataModal => (this.dataModal = dataModal)}
                    style={{ width: '700px' }}
                    title={title}
                    _onSubmit={this.onSubmit}
                    _onCance={_onCance}
                >
                    <DataEdit
                        items={dataConfig}
                        form={this.props.form}
                        destroyOnClose={destroyOnClose}
                    />
                </DataModal>
            </div>
        );
    }
}
export default Form.create()(DataForm); //高阶组件  无法捕捉到ref
