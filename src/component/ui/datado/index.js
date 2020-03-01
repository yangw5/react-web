/*
 * Created: 2019-09-16 08:49:22
 * Author : yang5
 * Email : yangw5@163.com
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-21 13:16:18
 * -----
 * Description:
 */

import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';
import { Button, DatePicker } from 'antd';
import DataForm from '../../widget/modal/DataForm';
import DeleteModal from '../../widget/modal/DeleteModal';
import InportModal from '../../widget/modal/InportModal';
import { formItems, formDatas, title } from './formconfig';
const { RangePicker } = DatePicker;

class Datado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            editType: 0,
        };
    }
    getInstance = ref => {
        //hoc组件访问ref
        // this.wrappedInstance = ref;
    };
    changeEditType = () => {
        switch (this.state.editType) {
            case 0:
                this.setState({
                    editType: 1,
                });
                break;
            case 1:
                this.setState({
                    editType: 2,
                });
                break;
            default:
                this.setState({
                    editType: 0,
                });
                break;
        }
    };
    showType = () => {
        switch (this.state.editType) {
            case 0:
                return '查看';
            case 1:
                return '编辑';
            default:
                return '新增';
        }
    };
    _showModal = index => {
        switch (index) {
            case 1:
                this.formRef._open();
                break;
            case 2:
                let a = this.delmRef;
                this.delmRef.current._open();
                break;
            case 3:
                this.inpmRef.current._open();
                break;
            case 4:
                this.export.current._open();
                break;
            default:
        }
        //  this.wrappedInstance._open()
        // this.dataForm._open();
    };
    //自定义按时间删除
    customTtems = () => {
        return [
            {
                value: 'data',
                name: '按日期导出',
                inputValue: <RangePicker onChange={this.onChange} />,
            },
        ];
    };
    onChange = (date, dateString) => {
        console.log(date, dateString);
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
                    <div>
                        <div>
                            form表单弹框：对表单数据进行查看，编辑和新增。通过对组件进行配置。
                            相关配置：form配置 data配置 表单状态 事件绑定
                        </div>
                        <Button
                            onClick={() => {
                                this.changeEditType();
                            }}
                            style={{ margin: '20px' }}
                        >
                            修改表单状态：{this.showType()}
                        </Button>
                        <Button
                            onClick={() => {
                                this._showModal(1);
                            }}
                            style={{ margin: '20px' }}
                        >
                            form表单弹框
                        </Button>
                    </div>
                    <div>
                        <div>删除弹框：对表格数据进行删除操作。</div>
                        <Button
                            onClick={() => {
                                this._showModal(2);
                            }}
                            style={{ margin: '20px' }}
                        >
                            删除弹框
                        </Button>
                    </div>
                    <div>
                        <div>导入弹框：选择相关模板导入数据。</div>
                        <Button
                            onClick={() => {
                                this._showModal(3);
                            }}
                            style={{ margin: '20px' }}
                        >
                            导入弹框
                        </Button>
                    </div>
                    <div>
                        <div>导出弹框：对表格数据进行导出操作。与删除弹框是同一个组件</div>
                        <Button
                            onClick={() => {
                                this._showModal(4);
                            }}
                            style={{ margin: '20px' }}
                        >
                            导出弹框
                        </Button>
                    </div>

                    <DataForm
                        wrappedComponentRef={form => (this.formRef = form)}
                        _onSubmit={this._onSubmit}
                        _onCance={this._onCance}
                        formItems={formItems}
                        formDatas={this.state.editType === 2 ? [] : formDatas}
                        title={title}
                        edit={this.state.editType}
                        beforeSubmit={valuse => {}}
                    />
                    <DeleteModal
                        _onSubmit={() => {}}
                        title={'删除'}
                        ref={delmRef => (this.delmRef = delmRef)}

                        // ref={(delmRef)=>this.delmRef=delmRef}
                    />
                    <DeleteModal
                        _onSubmit={() => {}}
                        title={'导出'}
                        ref={delmRef => (this.export = delmRef)}
                        customTtems={this.customTtems()}
                        // ref={(delmRef)=>this.delmRef=delmRef}
                    />
                    <InportModal
                        _onSubmit={() => {}}
                        title={'导入'}
                        ref={inpmRef => (this.inpmRef = inpmRef)}
                    />
                </div>
            </div>
        );
    }
}
export default Datado;
