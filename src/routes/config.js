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
                    key: '/app/frontend',
                    title: '前端总汇',
                    component: 'FrontEnd',
                },
                {
                    key: '/app/frontend/basestation',
                    title: '基础设施',
                    component: 'BaseStation',
                },
            ],
        },
        {
            key: '/app/toolsshow/index',
            title: '前端工具',
            icon: 'ant-cloud',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/toolsshow/index',
                    title: '工具1',
                    component: 'ToolsShow',
                },
                {
                    key: '/app/toolsshow/D3',
                    title: '工具2',
                    component: 'D3',
                },
            ],
        },
        {
            key: '/app/datashow/index',
            title: '数据可视化',
            icon: 'ant-cloud',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/datashow/d3/index',
                    title: 'D3',
                    component: 'D3',
                },
                {
                    key: '/app/datashow/echars/index',
                    title: 'Echars',
                    component: 'Echars',
                },
            ],
        },
        {
            key: '/app/antdui/index',
            title: 'antd UI库',
            icon: 'ant-design',
            requirement: [],
            subs: [
                {
                    key: '/app/antdui/index',
                    title: 'antd UI汇总',
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
            key: '/app/caseshow',
            title: '自定义UI库',
            icon: 'dropbox',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/ui',
                    title: 'UI汇总',
                    component: 'Uis',
                },
                {
                    key: '/app/ui/gallery',
                    title: '画廊',
                    component: 'Gallery',
                },
            ],
        },
        {
            key: '/app/caseshow/index',
            title: '案例展示',
            icon: 'file-done',
            requirement: ['head'],
            subs: [
                {
                    key: '/app/caseshow/index',
                    title: '案例汇总',
                    component: 'CaseShow',
                },
                {
                    key: '/app/caseshow/gameshow/Gameshow',
                    title: '游戏人生',
                    component: 'Gameshow',
                },
            ],
        },
    ],
};
