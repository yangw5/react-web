/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-14 15:44:43
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-20 14:17:17
 * @FilePath: \react-web\src\component\ui\FormCustom\widgets\index.js
 */
import React from 'react';
import config from './config';
import FormSearch from '../../../widget/Form/FormSearch';
function FormCustomConfig() {
    let title = () => {
        return (
            <div
                style={{
                    padding: '10px 0px 10px 30px',
                    fontSize: '16px',
                }}
            >
                <strong style={{ paddingRight: '10px' }}> FormSearch : </strong>
                form表单组件与table的组合.通过form表单查询并返回相应数据.包括基础的文本框，文本域，选择器，查询器，区域器,单选框，多选框，日期选择器，开关，滑块，评分组件，上传组件
                还包括自定义组件。
            </div>
        );
    };

    return (
        <div>
            <div>
                {title()}
                <FormSearch searchItem={config.searchItem} />
            </div>
        </div>
    );
}

export default FormCustomConfig;
