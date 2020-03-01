/*
 * @File:
 * @Description:作为数据信息显示
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 21:21:11
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-23 13:39:04
 * @FilePath: \react-web\src\component\ui\allinf\widget\CommonEdit.js
 */
import React from 'react';
import { Form } from 'antd';
import FormInfo from './forminfo';
import { detailFields, dataSorce } from './data';
const CommonEdit = props => {
    //初始化数据
    let initvalue = () => {};
    return (
        <div>
            <FormInfo
                {...{
                    dataSorce,
                    detailFields,
                    edit: true,
                    form: props.form,
                }}
            />
        </div>
    );
};
export default Form.create()(CommonEdit);
