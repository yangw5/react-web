/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-10-10 08:27:25
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-01 11:12:12
 */
import React, { useState, useEffect } from 'react';
import { BreadcrumbCustom } from '../../widget';
import Limists from './widget/Limists';
import RoleList from './widget/RoleList';
import { promissData, promissData2, roleData } from './widget/data';
import { dealData } from '../../../utils/tools';

export default () => {
    useEffect(() => {
        console.log(dealData(promissData));
    }, []);
    const breadItems = [{ title: '权限', icon: 'home' }];
    return (
        <div style={{ overflow: 'visible', padding: '20px' }}>
            <BreadcrumbCustom {...{ breadItems }} />
            <div
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        width: '15%',
                        padding: '20px',
                        background: '#eee',
                    }}
                >
                    <RoleList setType data={roleData} />
                </div>
                <div
                    style={{
                        width: '80%',
                        marginLeft: '20px',
                        background: '#eee',
                    }}
                >
                    <Limists
                        //data={dealData(promissData)}
                        data={dealData(promissData2)}
                        selfChildren
                    />
                </div>
            </div>
        </div>
    );
};
