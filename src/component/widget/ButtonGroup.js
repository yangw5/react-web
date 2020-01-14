/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-09-25 15:48:36
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-14 17:39:15
 */
import React from 'react';
import { Button } from 'antd';
//{ title = [{ name: '查询' }, { name: '重置' }]
export default ({ title, sumit, reset }) => {
    return (
        <div>
            {title && title.map((v, i) => <Button>v.name</Button>)}
            <Button onClick={sumit} type="primary">
                查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={reset}>
                重置
            </Button>
        </div>
    );
};
