/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:33:28
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:16:38
 * @FilePath: \react-web\src\component\ui\Basis\index.js
 */
import React, { useState } from 'react';
import { BreadcrumbCustom } from '../../widget';
import BasisCustomConfig from './widgets';

function FormCustom() {
    const breadItems = [{ title: 'UI库' }, { title: '基础组件' }];
    return (
        <div>
            <BreadcrumbCustom breadItems={breadItems} />
            <BasisCustomConfig />
        </div>
    );
}
export default FormCustom;
