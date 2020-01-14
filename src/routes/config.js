/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-09 17:31:43
 */
/**
 * @exports 路由配置文件
 */
export default {
    //菜单路由配置
    menus: [
        {
            key: '/app',
            title: '首页',
            icon: 'windows',
            component: 'DashBoard',
            requirement: ['head'],
        },
        {
            key: '/app/frontend',
            title: '前端知识',
            icon: 'alibaba',
            // component: "FrontEnd",
            requirement: ['head'],
            subs: [
                {
                    key: '/app/frontend/count',
                    title: '前端总汇',
                    // component: 'FrontEnd',
                    component: 'CommonList',
                    query: { configType: 'frontend' },
                    // requirement: ['head'],
                },
                {
                    key: '/app/frontend/basestation',
                    title: '基础设施',
                    component: 'BaseStation',
                },
            ],
        },
        {
            key: '/app/toolsshow',
            title: '前端工具',
            icon: 'ant-cloud',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/toolsshow/tool1',
                    title: '工具1',
                    component: 'ToolsShow',
                },
                {
                    key: '/app/toolsshow/tool2',
                    title: '工具2',
                    component: 'D3',
                },
            ],
        },
        {
            key: '/app/datashow',
            title: '数据可视化',
            icon: 'ant-cloud',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/datashow/d3',
                    title: 'D3',
                    component: 'D3',
                },
                {
                    key: '/app/datashow/echars',
                    title: 'Echars',
                    component: 'Echars',
                },
            ],
        },
        {
            key: '/app/antdui',
            title: 'antdup UI库',
            icon: 'ant-design',
            requirement: [],
            subs: [
                {
                    key: '/app/antdui/count',
                    title: 'antdup UI汇总',
                    component: 'AntdUi',
                },
                {
                    key: '/app/antdui/antdform',
                    title: '表单',
                    component: 'AntdForm',
                },
            ],
        },
        {
            key: '/app/ui',
            title: '自定义UI库',
            icon: 'dropbox',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/ui/count',
                    title: 'UI汇总',
                    component: 'Uis',
                },
                {
                    key: '/app/ui/form',
                    title: '表单',
                    component: 'FormCustom',
                },
                {
                    key: '/app/ui/gallery',
                    title: '画廊',
                    component: 'Gallery',
                },
                {
                    key: '/app/ui/datado',
                    title: '弹框',
                    component: 'Datado',
                },
                {
                    key: '/app/ui/tag',
                    title: '标签树',
                    component: 'TagTree',
                },
            ],
        },
        {
            key: '/app/account',
            title: '生活工具',
            icon: 'snippets',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/account/count',
                    title: '工具汇总',
                    component: 'Y5tool',
                },
                {
                    key: '/app/account/accountbook',
                    title: '账本',
                    component: 'AccountBook',
                },
            ],
        },
        {
            key: '/app/caseshow',
            title: '案例展示',
            icon: 'file-done',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/caseshow/count',
                    title: '案例汇总',
                    component: 'CaseShow',
                },
                {
                    key: '/app/caseshow/Gameshow',
                    title: '游戏人生',
                    component: 'Gameshow',
                },
            ],
        },
    ],
    others: [
        {
            key: '/app/material/frontend/info/:id?',
            title: '数据显示',
            component: 'commonshow',
        },
        {
            key: '/app/material/frontend/edit/:id?',
            title: '数据编辑',
            component: 'commonEdit',
        },
    ],
};
