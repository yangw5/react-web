/*
 * @File:
 * @Description:权限
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-28 13:13:39
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-01 11:26:16
 * @FilePath: \react-web\src\component\ui\limits\widget\Limists.js
 */

import React from 'react';
import Treecustom from '../../../widget/Treecustom';
import './Limists.less';

export default props => {
    let onselect = (selectedKeys, info) => {
        //点击树触法
        console.log('selected', selectedKeys, info);
    };
    let oncheck = checkedKeys => {
        //获取选中的复选框
        console.log('onCheck', checkedKeys);
        // setCheckedKeys(checkedKeys);
    };
    return (
        <div className={'limists_root'}>
            <Treecustom
                datasource={props.data}
                defaultSelectedKeys={[]} //	默认选中的树节点
                selfChildren={props.selfChildren}
                onSelect={onselect}
                onCheck={oncheck}
                edit
                // draggable
                // showLine
            />
        </div>
    );
};
