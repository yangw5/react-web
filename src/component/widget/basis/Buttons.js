/*
 * @File:widget\Buttons.js
 * @Description:操作按钮组件（需要相应权限）
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-20 16:43:10
 * @FilePath: \react-web\src\component\widget\Buttons.js
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import AuthPermission from '../../widget/AuthPermission';
import { mergeArrWithAuth } from '../../../utils';

//父组件通过requirement传入权限对象，权限对象的属性名称对应按钮顺序。
//通过遍历按钮数组，给相应的按钮添加权限。 然后在浏览器缓存取出权限进行判断

function Buttons({ hasButtons, requirement = false }) {
    let [btns, setBtns] = useState([
        {
            title: '新建',
        },
        {
            title: '编辑',
        },
        {
            title: '查看',
        },
        {
            title: '删除',
        },
        {
            title: '导入',
        },
        {
            title: '导出',
        },
    ]);
    useEffect(() => {
        let b = mergeArrWithAuth(btns, requirement);
        requirement && setBtns(b); //给按钮上权限
    }, [hasButtons, requirement, btns]);
    return (
        hasButtons && (
            <div>
                <Button.Group>
                    {btns &&
                        btns.map(v => (
                            <AuthPermission requirement={v.requirement} key={v.title}>
                                <Button>{v.title}</Button>
                            </AuthPermission>
                        ))}
                </Button.Group>
            </div>
        )
    );
}

class ButtonClass extends React.Component {
    render() {
        let { hasButtons, requirement = false } = this.props;
        let btns = [
            {
                title: '新建',
            },
            {
                title: '编辑',
            },
            {
                title: '查看',
            },
            {
                title: '删除',
            },
            {
                title: '导入',
            },
            {
                title: '导出',
            },
        ];
        btns = mergeArrWithAuth(btns, requirement);
        return (
            hasButtons && (
                <div>
                    <Button.Group>
                        {btns &&
                            btns.map(v => (
                                <AuthPermission requirement={v.requirement} key={v.title}>
                                    <Button>{v.title}</Button>
                                </AuthPermission>
                            ))}
                    </Button.Group>
                </div>
            )
        );
    }
}

// export default Buttons;
export default ButtonClass;
