/*
 * @File:widget\Buttons.js
 * @Description:操作按钮组件（需要相应权限）
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-20 16:46:27
 * @FilePath: \react-web\src\component\widget\Buttons.js
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import AuthPermission from './AuthPermission';
import { mergeArrWithAuth } from '../../utils';

function Buttons({ hasButtons, requirement }) {
    let [btns, setBtns] = useState([
        {
            title: '新建',
        },
        {
            title: '导入',
        },
    ]);
    useEffect(() => {
        let b = mergeArrWithAuth(btns, requirement);
        setBtns(b); //给按钮上权限
    }, []);
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
                title: '导入',
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
