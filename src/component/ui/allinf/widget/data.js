/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-22 14:05:26
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-23 13:06:50
 * @FilePath: \react-web\src\component\ui\allinf\widget\data.js
 *
 */
import { COP_TYPE } from '../../../../content';
export const detailFields = [
    {
        title: '基本信息',
        items: [
            {
                label: '组件名称',
                field: 'name',
                fieldType: 'input',
            },
            {
                label: '组件中文名',
                field: 'chinaName',
                fieldType: 'input',
            },
            {
                label: '状态',
                field: 'status',
                fieldType: 'select',
                options: [
                    {
                        id: true,
                        name: '开发完成',
                    },
                    {
                        id: false,
                        name: '开发中',
                    },
                ],
            },
            {
                label: '开发人员',
                field: 'autor',
                fieldType: 'input',
            },
            {
                label: '类型',
                field: 'type',
                fieldType: 'select',
                options: COP_TYPE,
            },
            {
                label: '时间',
                field: 'time',
                fieldType: 'input',
            },
        ],
    },
    {
        title: '信息说明',
        items: [
            {
                label: '组件说明',
                field: 'dec',
                fieldType: 'textarea',
                class: 'whole',
            },
        ],
    },
];
export const dataSorce = {
    id: '1',
    name: 'FormInput',
    chinaName: '输入框',
    status: true,
    autor: 'young5',
    type: '1',
    time: '2020-02-02',
    dec: 'formInput是一基础表单组件，通过对表单组件进行配置来控制forminput的显示',
};
