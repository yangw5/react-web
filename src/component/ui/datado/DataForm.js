/*
 * @File:
 * @Description:自定义逻辑处理组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-09-16 09:26:49
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-18 17:02:53
 * @FilePath: \react-web\src\component\ui\datado\DataForm.js
 */

import React, { Component } from 'react';
import DataModal from './DataModal';
import { Row, Form } from 'antd';
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
    render() {
        let items = [
            {
                label: '案例名称',
                field: 'name',
                fieldType: 'input',
                required: true,
                classname: 'average-2',
            },
            {
                label: '案例编号',
                field: 'date',
                fieldType: 'input',
                required: true,
                classname: 'average-2',
            },
            {
                label: '时间',
                field: 'date',
                fieldType: 'date',
                required: true,
                classname: 'average-2',
            },
            {
                label: '案例名称',
                field: 'name',
                fieldType: 'input',
                required: true,
                classname: 'average-2',
            },
        ];
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
                >
                    <Row>
                        <DataEdit items={items} form={this.props.form} />
                    </Row>
                </DataModal>
            </div>
        );
    }
}
export default Form.create()(DataForm); //高阶组件  无法捕捉到ref
