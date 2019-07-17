/**
 * @exports 路由配置文件
 */
export default {
  //菜单路由配置
  menus: [
    {
      key: "/app",
      title: "首页",
      icon: "windows",
      component: "DashBoard",
      requirement: ["head"]
    },
    {
      key: "/app/frontend",
      title: "前端知识",
      icon: "alibaba",
      // component: "FrontEnd",
      requirement: ["head"],
      subs: [
        {
          key: "/app/frontend",
          title: "前端总汇",
          component: "FrontEnd"
        },
        {
          key: "/app/frontend/basestation",
          title: "基础设施",
          component: "BaseStation"
        }
      ]
    },
    {
      key: "/app/toolsshow/index",
      title: "前端工具",
      icon: "ant-cloud",
      component: "ToolsShow",
      requirement: ["head"]
      // subs: []
    },
    {
      key: "/app/caseshow/index",
      title: "案例展示",
      icon: "file-done",
      component: "CaseShow",
      requirement: ["head"]
      // subs: []
    }
  ]
};
