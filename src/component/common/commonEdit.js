/*
 * @File:\common\commonshow.js
 * @Description:数据展示组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-13 09:06:07
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-18 18:01:24
 * @FilePath: \react-web\src\component\common\commonshow.js
 */
import React from 'react';
import * as config from './config';
import { Forminfo } from '../widget';
import { Form } from 'antd';

class CommomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        //获取configType
    }
    componentDidMount() {}
    shouldComponentUpdate(nextprops, nextstate) {
        return true;
    }
    render() {
        let { query, form } = this.props;
        return (
            <div>
                <Forminfo
                    edit
                    // onEdit={() => {
                    //     this.setState({
                    //         edit: true,
                    //     });
                    // }}
                    // onBack={() => {
                    //     this.setState({
                    //         edit: false,
                    //     });
                    // }}
                    form={form}
                />
            </div>
        );
    }
}

export default Form.create()(CommomList);
