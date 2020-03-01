/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-28 13:12:12
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-29 21:17:39
 * @FilePath: \react-web\src\component\ui\limits\widget\RoleList.js
 */
import React, { useState, useEffect } from 'react';
import Treecustom from '../../../widget/Treecustom';
import { Switch } from 'antd';
import './RoleList.less';
//角色展示可以为列表展示和树展示
export default ({ type = true, data, setType }) => {
    let [typeself, setTypeself] = useState(true);
    useEffect(() => {
        setTypeself(type);
    }, []);
    //列表
    let ListRole = () => {
        return (
            <ui className={'role_ul'}>
                {data.map((v, i) => (
                    <li className={'role_li'}>{v.name}</li>
                ))}
            </ui>
        );
    };
    //树
    let ListTree = () => {
        return '暂不支持树型显示';
        // <Treecustom
        //     datasource={data}
        //     defaultSelectedKeys={[]} //	默认选中的树节点
        //     onSelect={() => {}}
        //     edit
        // />
    };
    //角色显示
    let showData = () => {
        return data && data.length > 0 ? (typeself ? ListTree() : ListRole()) : null;
    };

    let setRoleType = () => (
        <div className={'role_type'}>
            <Switch
                checkedChildren="树"
                unCheckedChildren="列表"
                defaultChecked={type}
                onChange={onChange}
            />
        </div>
    );

    let onChange = () => {
        setTypeself(!typeself);
    };

    return (
        <div className={'rolelist_root'}>
            {setType && setRoleType()}
            {showData()}
        </div>
    );
};
