/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-09-25 15:48:36
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-09 15:07:27
 */
import React from 'react';
import { Button } from 'antd';

export let ButtonGroup = ({ title = [{ name: '查询' }, { name: '重置' }] }) => {
    return (
        <div>
            {title.map((v, i) => (
                <Button>v.name</Button>
            ))}
        </div>
    );
};
