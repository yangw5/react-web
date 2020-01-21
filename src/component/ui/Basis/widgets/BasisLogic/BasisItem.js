/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:47:41
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:46:47
 * @FilePath: \react-web\src\component\ui\Basis\widgets\BasisItem.js
 */
import React from 'react';
import './BasisItem.less';

export default ({
    name,
    description,
    ComponentName,
    children,
    propsConfig,
    other,
    receiveData,
    ...resprops
}) => {
    return (
        <div className={'basisitem_root'}>
            <p className={'title'}>{name} : </p>
            <div className="description">{description}</div>
            <div className="component">
                {ComponentName && <ComponentName {...propsConfig}>{children}</ComponentName>}
                <div className="others">{other && other.show(receiveData, resprops)}</div>
            </div>
        </div>
    );
};
