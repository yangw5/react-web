/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-28 09:40:01
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
                    title: '第三方工具',
                    component: 'ToolsShow',
                },
                {
                    key: '/app/toolsshow/toolscusrom',
                    title: '自定义工具',
                    component: 'ToolsCusrom',
                },
            ],
        },
        {
            key: '/app/ui',
            title: '自定义组件',
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
                    key: '/app/ui/basis',
                    title: '基础组件',
                    component: 'Basis',
                },
                {
                    key: '/app/ui/datado',
                    title: '弹框',
                    component: 'Datado',
                },
                {
                    key: '/app/ui/gallery',
                    title: '画廊',
                    component: 'Gallery',
                },
                {
                    key: '/app/ui/limits',
                    title: '权限控制',
                    component: 'Limits',
                },
                {
                    key: '/app/ui/tag',
                    title: '标签树',
                    component: 'TagTree',
                },
            ],
        },
        {
            key: '/app/antdui',
            title: '自定义组件库',
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
            key: '/app/account',
            title: '第三方组件',
            icon: 'snippets',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/account/count',
                    title: '组件汇总',
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
        {
            key: '/app/ui/info/:id?',
            title: 'ui数据显示',
            component: 'UisInfo',
        },
        {
            key: '/app/ui/edit/:id?',
            title: 'ui数据编辑',
            component: 'UisEdit',
        },
    ],
};
