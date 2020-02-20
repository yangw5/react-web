/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 14:14:53
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 16:02:03
 * @FilePath: \react-web\src\component\ui\datado\config.js
 */
export let formItems = [
    {
        label: '案例名称',
        field: 'name',
        fieldType: 'input',
        required: true,
        classname: 'average-3',
    },
    {
        label: '案例编号',
        field: 'number',
        fieldType: 'input',
        classname: 'average-3',
    },
    {
        label: '时间',
        field: 'date',
        fieldType: 'date',
        classname: 'average-3',
    },
    {
        label: '法人',
        field: 'autor',
        fieldType: 'input',
        classname: 'average-3',
    },
    {
        label: '别名',
        field: 'secondname',
        fieldType: 'input',
        classname: 'average-3',
    },
    {
        label: '年龄',
        field: 'old',
        fieldType: 'input',
        classname: 'average-3',
    },
    {
        label: '国籍',
        field: 'country',
        fieldType: 'input',
        classname: 'average-3',
    },
];
export let title = 'Form表单操作'; 
export let formDatas={
    name:'react-web',
    number:1,
    old:'2岁',
    date:'2008-08-03',
    autor:'young5',
    secondname:'小伍',
    country:'中国'



}