import React, { Component } from 'react';
import { Form, Col, Card } from 'antd';
// import CFromInput from './CFromInput';
import FromInput from '../Form/FromInput';
import FromTextArea from '../Form/FormTextArea';
import FormPointsRange from '../Form/FormPointsRange';
import FormSelect from '../Form/FormSelect';
import FormCheckBox from '../Form/FormCheckBox';
import FormData from '../Form/FormData';
import FormRange from '../Form/FormRange';
import FormComplete from '../Form/FormComplete';
import './FormSearch.less';

import { Buttons, ButtonGroup } from '../../widget';
import TableWidget from '../TableWidget';
const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 17,
    },
};
// const length = 12;

class FormSearch extends Component {
    constructor(props) {
        super(props);
        this.components = {
            pointsrange: FormPointsRange,
        };
        this.state = {
            initialValue: '密码',
            initialValue1: '性别',
        };
    }
    //提交
    onsumit = () => {
        // this.props.form.getFieldsValue();
        console.log('表单数据：');
        console.log(this.props.form.getFieldsValue());
        // console.log(this.props.form.getFieldsValue()['edittimer'][0].format('YYYY-MM-DD'));
        this.props.form.setFieldsValue({ password: '' });
    };
    //重置
    handleReset = () => {
        this.props.form.resetFields();
    };
    //
    sliceArray = (array, size) => {
        var result = [];
        for (let i = 0; i <= array.length / size; i++) {
            let start = i * size;
            let end = start + size;
            result.push(array.slice(start, end));
        }
        return result;
    };
    //类型渲染
    _renderFromInput = parms => (
        <FromInput {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFromTextarea = parms => (
        <FromTextArea {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormSelect = parms => (
        <FormSelect {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormCheckBox = parms => (
        <FormCheckBox {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormData = parms => (
        <FormData {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormRange = parms => (
        <FormRange {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _rederFormComplete = parms => (
        <FormComplete {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    //类型判断
    _renderFormItem = item => {
        switch (item.type) {
            case 'input':
                return this._renderFromInput(item);
            case 'textarea':
                return this._renderFromTextarea(item);
            case 'select':
                return this._renderFormSelect(item);
            case 'check':
                return this._renderFormCheckBox(item);
            case 'data':
                return this._renderFormData(item);
            case 'range':
                return this._renderFormRange(item);
            case 'complete':
                return this._rederFormComplete(item);
            default:
                return this._renderForm(this.components[item.type], item);
        }
    };
    _renderForm = (ComponentName, parms) => {
        return <ComponentName {...{ ...formItemLayout, ...parms, ...this.props.form }} />;
    };
    // fromItem jsx
    getFields = fromItems => {
        return fromItems.map((v, i) => (
            // <Row gutter={24} key={i}>
            //     v.map((m,n)=>(
            // <Row gutter={24} key={i}>
            <Col span={6} key={i}>
                {this._renderFormItem(v)}
            </Col>
            //  )
            //     )
            // </Row>
        ));
    };
    //提交
    handleSearch = () => {};
    render() {
        let {
            form,
            searchItem,
            columnsItems,
            rowKey,
            searchApi,
            dataSource,
            showSelection,
            title = '',
            ...restProps
        } = this.props;
        return (
            <div
                className={'From_input'}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    padding: '10px',
                }}
            >
                <Card
                    id="area"
                    title={title}
                    bordered={false}
                    style={{
                        width: '100%',
                    }}
                >
                    <Form onSubmit={this.handleSearch}>
                        {this.getFields(searchItem)}
                        {
                            <Col
                                span={24}
                                style={{
                                    textAlign: 'right',
                                }}
                            >
                                <ButtonGroup sumit={this.onsumit} reset={this.handleReset} />
                            </Col>
                        }
                    </Form>
                </Card>
                <Card
                    style={{
                        width: '100%',
                    }}
                >
                    <div>
                        <Buttons
                            {...{
                                hasButtons: true,
                                requirement: restProps.btnsRequirement,
                            }}
                        />
                    </div>
                    <div style={{ width: '100%', marginTop: '20px' }}>
                        <TableWidget
                            ref={table => (this.table = table)}
                            fetchApi={searchApi}
                            apiParams={''}
                            // defaultFetch={false}
                            callBackData={() => {}}
                            {...{
                                // materialClassify,
                                // isFormDataParam,
                                // isJson,
                                // materialFlag,
                                // listTypeIds,
                                // typeFlag,
                                ...this.props,
                            }}
                            tableConfig={{
                                columns: columnsItems,
                                rowKey: row => row[rowKey],
                                dataSource: dataSource,
                                showSelection,
                            }}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormSearch);
