/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-28 11:52:22
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-01 11:20:15
 * @FilePath: \react-web\src\component\widget\Treecustom.js
 */
import React from 'react';
import { Tree } from 'antd';
import './Treecustom.less';
const { TreeNode } = Tree;

export default ({
    datasource,
    defaultExpandAll,
    defaultSelectedKeys,
    onSelect,
    onCheck,
    children,
    edit,
    selfChildren,
    ...restProps
}) => {
    let setChildren = data => {
        return (
            data &&
            data.length > 0 &&
            data.map(v => {
                if (v.children) {
                    return (
                        <TreeNode title={v.name} key={v.keystr} className="tree_parent">
                            {setChildren(v.children)}
                        </TreeNode>
                    );
                } else {
                    return <TreeNode title={v.name} key={v.keystr} className="tree_son" />;
                }
            })
        );
    };
    let pro = !selfChildren ? { treeData: datasource } : null;
    return (
        <div className={'tree_root'}>
            <Tree
                // treeData={!selfChildren && datasource}
                {...{ pro }}
                checkable={edit}
                defaultExpandAll={defaultExpandAll || true} //默认展开所有树节点
                defaultSelectedKeys={defaultSelectedKeys} //	默认选中的树节点
                onSelect={onSelect}
                onCheck={onCheck}
                {...{ ...restProps }}
            >
                {selfChildren && setChildren(datasource)}
            </Tree>
        </div>
    );
};
