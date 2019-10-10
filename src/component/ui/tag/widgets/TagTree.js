/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-10-10 09:49:40
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-10 17:35:32
 */
import React, { useState, useEffect } from 'react';
import ReactDomServer from 'react-dom/server';
import { Card, Tree, Input, Icon } from 'antd';
import { setArryItem } from '../../../../utils/tools';
const { TreeNode, DirectoryTree } = Tree;
const { Search } = Input;
export default props => {
    let [treedata, settreedata] = useState([]);
    useEffect(() => {
        // document.addEventListener("click", documentClickHandler);
        let data = [
            {
                title: '是的',
                key: '1',
                isEditable: false,
                mumn: [
                    {
                        title: '安达市',
                        key: '2',
                        isEditable: false,
                    },
                    {
                        title: '是滴是滴',
                        key: '3',
                        isEditable: false,
                    },
                ],
            },
            {
                title: '阿萨德撒',
                key: '4',
                isEditable: false,
            },
            {
                title: '沙雕',
                key: '5',
                isEditable: false,
            },
        ];
        settreedata(data);
    }, []);
    let onSelect = (keys, event) => {
        console.log('Trigger Select', keys, event);
    };
    // let documentClickHandler=()=>{

    // }
    let onExpand = () => {
        console.log('Trigger Expand');
    };
    //设置tree的组成
    let setTreeNode = data => {
        return data.map(v => {
            if (v.mumn) {
                return (
                    <TreeNode
                        title={
                            <span
                                onDoubleClick={e => changename(e, v)}
                                onClick={e => e.stopPropagation()}
                            >
                                {!v.isEditable ? (
                                    v.title
                                ) : (
                                    <Input
                                        size="small"
                                        placeholder="Search"
                                        value={v.title}
                                        style={{
                                            width: '80px',
                                            border: '0',
                                        }}
                                    />
                                )}
                            </span>
                        }
                        key={v.key}
                    >
                        {setTreeNode(v.mumn)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode
                    title={
                        <span
                            onDoubleClick={e => changename(e, v)}
                            onClick={e => e.stopPropagation()}
                        >
                            {!v.isEditable ? (
                                v.title
                            ) : (
                                <Input
                                    size="small"
                                    placeholder="Search"
                                    value={v.title}
                                    onChange={e => {
                                        changevalue(e.target.value, v);
                                    }}
                                    style={{
                                        width: '80px',
                                        border: '0',
                                        borderBottom: '1px solid red',
                                    }}
                                />
                            )}
                        </span>
                    }
                    // title={v.title}
                    key={v.key}
                    isLeaf
                />
            );
        });
    };
    let onChange = () => {};
    //修改tree名称
    let changename = (e, value) => {
        let newvalue = { ...value, isEditable: !value.isEditable };
        e && e.stopPropagation();
        let newdata = setArryItem(treedata, value, newvalue);
        settreedata(newdata);
    };
    let closeinput = () => {
        // setshowtype(true);
    };
    let changevalue = (value, oldv) => {
        let newvalue = { ...oldv, title: value };
        let newdata = setArryItem(treedata, oldv, newvalue);
        settreedata(newdata);
    };
    //tree中增加按钮的显示
    let onMouseEnter = ({ event, node }) => {
        event.target.insertAdjacentHTML(
            //指定的文本解析为HTML或XML,结果节点插入DOM树中的指定位置
            // 'beforebegin'：element本身之前。
            // 'afterbegin'：就在element第一个孩子之前。
            // 'beforeend'：在的element最后一个子之后的内。
            // 'afterend'：element本身之后。
            'beforeend',
            ReactDomServer.renderToString(
                //ReactDOMServer 对象使你能够将组件渲染为静态标记
                <span style={{ marginLeft: '20px' }} id="tree_op">
                    <Icon type="plus-square" />
                </span>
            )
        );
    };
    let onMouseLeave = () => {
        const icons = document.getElementById('tree_op');
        icons && icons.parentNode.removeChild(icons);
    };
    return (
        <Card style={{ width: 300, height: 'auto' }} onClick={closeinput}>
            <div>
                <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={onChange} />
                <DirectoryTree
                    multiple
                    defaultExpandAll
                    onSelect={onSelect}
                    onExpand={onExpand}
                    checkable
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {setTreeNode(treedata)}
                </DirectoryTree>
            </div>
        </Card>
    );
};
