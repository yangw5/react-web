/*
 * @File:
 * @Description:作为数据信息显示
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 21:21:11
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-24 16:55:49
 * @FilePath: \react-web\src\component\ui\allinf\widget\CommonInfo.js
 */
import React from 'react';
import { Form } from 'antd';
import FormInfo from './forminfo';
import { detailFields, dataSorce } from './data';
import { withRouter } from 'react-router-dom';
const CommitInfo = props => {
    //初始化数据
    let initvalue = () => {};
    let onBacking = () => {};
    let onEditing = () => {
        // onEdit && onEdit();
        const { match, history } = props;
        history.push({ pathname: `/app/ui/edit/1/` }); //编辑进行跳转
    };
    return (
        <div>
            <FormInfo
                {...{
                    dataSorce,
                    detailFields,
                    edit: false,
                    form: props.form,
                    onBacking,
                    onEditing,
                }}
            />
        </div>
    );
};
export default Form.create()(withRouter(CommitInfo));
