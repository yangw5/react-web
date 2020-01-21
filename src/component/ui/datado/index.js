/*
 * Created: 2019-09-16 08:49:22
 * Author : yang5
 * Email : yangw5@163.com
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 16:05:28
 * -----
 * Description:
 */

import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';
import { Button } from 'antd';
import DataForm from '../../widget/modal/DataForm';
import fromconfig from './formconfig';
class Datado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    getInstance = ref => {
        //hoc组件访问ref
        // this.wrappedInstance = ref;
    };
    _showModal = () => {
        this.formRef._open();
        //  this.wrappedInstance._open()
        // this.dataForm._open();
    };
    _onSubmit = value => {
        console.log(value);
        alert('提交');
    };
    _onCance = () => {
        alert('取消');
    };
    render() {
        //const inputRef = React.createRef();
        //ref={inputRef}
        //ref={dataForm => (this.dataForm = dataForm)}
        const breadItems = [{ title: 'UI库' }, { title: '自定义表单' }];
        return (
            <div>
                <BreadcrumbCustom breadItems={breadItems} />
                <div style={{ padding: '20px' }}>
                    <Button onClick={this._showModal} style={{ margin: '20px' }}>
                        form表单弹框
                    </Button>
                    <Button onClick={this._showModal} style={{ margin: '20px' }}>
                        删除弹框
                    </Button>
                    <Button onClick={this._showModal} style={{ margin: '20px' }}>
                        导入弹框
                    </Button>
                    <Button onClick={this._showModal} style={{ margin: '20px' }}>
                        导出弹框
                    </Button>
                    <Button onClick={this._showModal} style={{ margin: '20px' }}>
                        添加弹框
                    </Button>
                    <DataForm
                        wrappedComponentRef={form => (this.formRef = form)}
                        _onSubmit={this._onSubmit}
                        _onCance={this._onCance}
                        config={fromconfig}
                    />
                </div>
            </div>
        );
    }
}
export default Datado;
