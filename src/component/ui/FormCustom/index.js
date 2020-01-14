/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-14 15:31:48
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-14 15:47:49
 * @FilePath: \react-web\src\component\ui\Form\index.js
 */
import React, { useState } from 'react';
import { BreadcrumbCustom } from '../../widget';
import FormCustomConfig from './widgets';

function FormCustom() {
    const breadItems = [{ title: 'UI库' }, { title: '自定义表单' }];
    return (
        <div>
            <BreadcrumbCustom breadItems={breadItems} />
            <FormCustomConfig />
        </div>
    );
}
export default FormCustom;
