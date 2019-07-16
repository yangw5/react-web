/**
 * @exports 路由配置文件
 */
export default {
  //菜单路由配置
  menus: [
    {
      key: "/app",
      title: "前端知识",
      icon: "",
      component: "FrontEnd",
      requirement: ["head"]
    },
    {
      key: "/app/toolsshow/index",
      title: "前端工具",
      icon: "",
      component: "ToolsShow",
      requirement: ["head"]
      // subs: []
    },
    {
      key: "/app/caseshow/index",
      title: "案例展示",
      icon: "",
      component: "CaseShow",
      requirement: ["head"]
      // subs: []
    }
  ]
};
