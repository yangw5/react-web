/*
 * @File:datapage\datashow\DataShow.js
 * @Description:数据显示组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-13 08:52:56
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-18 17:27:48
 * @FilePath: \react-web\src\component\widget\datapage\datashow\DataShow.js
 */
//基础模板
//可以自定义模板
import React from 'react';
import { Tabs, Col, Row } from 'antd';
import DataShow from './DataShow';
import ButtonsMaterial from '../../../widget/ButtonsMaterial';
import { BoxInfo } from '../../index';
import DataEdit from './DataEdit';
const { TabPane } = Tabs;
const imgURL = require('../../../../style/img/default.png');
/**
 *
 * @param {*} props
 *
 *
 *
 *
 */
let infoItem = [
    {
        title: '基础信息',
        data: [
            {
                lable: '名称',
                value: 'es6',
            },
            {
                lable: '翻译名',
                value: 'ECMAScript6',
            },
            // {
            //     label: '状态',
            //     field: 'status',
            //     fieldType: 'add',
            //     options: STATUS,
            //     required: true,
            // },
            {
                noshow: true, //占位
                // type: 'stars', //显示类型
                lable: '占位',
                // detailHide: true, //是否显示
                // class: 'whole',
            },
            {
                lable: '作者',
                value: '阮一峰',
            },
            {
                lable: '类型',
                value: 'javescript',
            },
            {
                lable: '时间',
                value: '2015-6',
            },
            {
                lable: '热度',
                value: '100',
                class: 'whole',
            },
            {
                lable: '地区',
                value: '英国',
                detailHide: true,
            },
            {
                lable: '地区',
                value: '中国',
            },
            {
                lable: '销量',
                value: '12000',
            },
        ],
    },
    {
        title: '章节',
        data: [
            {
                lable: '目录',
                value: '很多',
                class: 'whole',
            },
            {
                lable: '发展进程',
                value:
                    '1996 年 11月' +
                    'JavaScript 的创造者 Netscape 公司将 JavaScript 提交给标准化组织 ECMA（European Computer Manufacturers Association）。' +
                    '1997年 ES1' +
                    'ECMA 发布 262 号标准文件（ECMA-262），规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript (ES).' +
                    '1998年 ES2' +
                    '内容编辑加工，没有特性修改。' +
                    '有较完善的修改，成为JavaScript的通行标准，得到了广泛支持。' +
                    '2000年 ES4 , 2008年终止' +
                    ' 也称作JavaScript 2，因改动太大没有通过，Harmony项目启动来跟进，ES4大部分内容被 ES6 继承. Harmony部分内容放到ES6之后。' +
                    '2009年 ES5(ES3.1)' +
                    '新功能主要包括：JSON对象（包含parse/stringify等方法）、Array和Object增加一些方法，严格模式（use strict），函数的bind方法。' +
                    '2011年 ES5.1' +
                    '成为 ISO 国际标准（ISO/IEC 16262:2011)， 到了2012年底，主流浏览器都支持ECMAScript 5.1的全部功能' +
                    '2015年 ES2015(ES6)' +
                    ' 做了大量的更新，但向后兼容。ES6是一次重大改进。' +
                    ' 部分功能：let/const、变量的解构赋值、Promise、箭头函数…' +
                    '2016年 ES2016(ES7)' +
                    ' 新功能主要包括：' +
                    '1. Array.prototype.includes检查数组中是否存在值；（区别ES6字符串的includes方法）' +
                    '2. Exponentiation Operator 求幂运算 (a ** b等价于Math.pow(a,b))' +
                    '2017年 ES2017(ES8)' +
                    ' 部分功能：' +
                    '1.Object.values/entries/getOwnPropertyDescriptors' +
                    '2.String.prototype.padStart/padEnd' +
                    '3.函数参数列表和调用中的尾逗号（Trailing commas）' +
                    '4.Async Functions 异步函数（async/await）',
                class: 'whole',
            },
        ],
    },
];
let items = [
    {
        label: '案例名称',
        field: 'name',
        fieldType: 'input',
        required: true,
        classname: 'average-2',
    },
    {
        label: '案例编号',
        field: 'date',
        fieldType: 'input',
        required: true,
        classname: 'average-2',
    },
    {
        label: '时间',
        field: 'date',
        fieldType: 'date',
        required: true,
        classname: 'average-2',
    },
    {
        label: '案例名称',
        field: 'name',
        fieldType: 'input',
        required: true,
        classname: 'average-2',
    },
];

const Forminfo = props => {
    let { query, edit, onEdit, onBack, form } = props;
    return (
        <div className={'root'}>
            <Tabs>
                <TabPane tab={'基本信息'} key="1">
                    <div style={{}}>
                        {/* 封面 */}
                        <Row style={{ height: '120px' }}>
                            <Col span={2}>
                                <div style={{ padding: '10px' }}>
                                    <img alt="封面" src={imgURL} style={{ width: '100px' }} />
                                </div>
                            </Col>
                            {/* 简介*/}
                            <Col span={22} style={{ padding: '10px' }}>
                                <div
                                    style={{
                                        padding: '10px',
                                        border: '1px solid #eee',
                                        height: '100px',
                                    }}
                                >
                                    这是简介
                                </div>
                            </Col>
                        </Row>
                        {/* 内容1 */}
                        <div style={{ padding: '10px' }}>
                            {infoItem &&
                                infoItem.length > 0 &&
                                infoItem.map(v => (
                                    <BoxInfo title={v.title}>
                                        {edit ? (
                                            <DataEdit items={items} form={form} />
                                        ) : (
                                            <DataShow data={v.data} />
                                        )}
                                    </BoxInfo>
                                ))}
                        </div>
                        {/* 内容2 */}
                        {/* 。。。 */}
                        {/* 其他 */}
                    </div>
                </TabPane>
            </Tabs>
            <ButtonsMaterial
                onSubmit={() => {
                    alert('提交');
                }}
                onEdit={() => {
                    onEdit();
                }}
                onBack={() => {
                    onBack();
                }}
                onLog={() => {
                    alert('日志');
                }}
            />
        </div>
    );
};

export default Forminfo;
