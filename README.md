# react-web

作者：young5 :baby:

邮箱：yangw5@163.com

react-web 是一个可扩展的 react 后台管理系统的项目模板。可以通过它搭建基础的 react 项目，在此基础上开发相应的业务。

[github 完整源码地址](https://github.com/yangw5/react-web.git)：https://github.com/yangw5/react-web.git 🔥🔥🔥🔥🔥

-   本项目目前拥有 4 个分支 master(主分支) ，react（测试），react-dev(全开发) 和 book-dev（娱乐开发分支），这 4 个分支都是通过 :two_hearts: javescript :two_hearts: 进行开发。稳定版本为 master 分支。
-   后期将增加 TypeScript 开发分支，敬请期待吧 😁😁😁😁😁 :eyes: :eyes: :eyes: :eyes: :eyes:

## react-web 的安装使用

1.  通过脚手架进行安装

    1.  通过脚手架 react-young5-cli 进行安装

            npm i react-young-cli -g

            react-young5-cli i

            yarn

            yarn/npm start

    更多关于 react-young5-cli 脚手架以及自定义脚手架工具的相关知识，请点击 :point_right: [https://github.com/yangw5/react-young5-cli](https://github.com/yangw5/react-young5-cli) :point_left: 进行查看:thumbsup:。

    2.  通过 git 拉去 gitbub 源码安装

             git clone https://github.com/yangw5/react-young5-cli.git

             yarn

             yarn/npm start

2.  项目打包

            yarn build or npm run build

## 项目依赖

-   [react]()：js 框架 👍
-   [antd]()：蚂蚁金服 UI 框架 👍
-   [axios]()：封装的 http 请求库 👍
-   [echarts]()：js 可视化库 👍
-   [lodash](https://www.lodashjs.com/)：一个一致性、模块化、高性能的 JavaScript 实用工具库 👍
-   [antd-young5]():基于 antd 的组件库 👍
-   [screenfull](https://github.com/sindresorhus/screenfull.js):JavaScript 全屏 API 的跨浏览器使用的简单包装 👍
-   [react-beautiful-dnd]():react 拖拽组件
-   ...

## 项目目录

        + --config/                            ---项目配置文件
        |    --- webpack.config                ---webpack配置文件
        + --public/                            ---项目如口页面文件
        |    --- index.html                    ---项目如口页面文件
        + --scripts/                           ---项目测试打包文件
        |
        + --src/                               ---项目源代码
        |       +-- axios/                     ---http请求
        |       |   ---index.js
        |       |   ---config.js
        |       +--component/                  ---项目组件
        |       |   +--antdui/
        |       |       ---...
        |       |   +--widget/                 ---功能组件
        |       |       ---...
        |       |   +--page/
        |       |       ---...
        |       + --content/                   ---全局静态变量
        |       |   ---index.js
        |       |   ---config.js
        |       + --reducer/                   ---redux配置文件
        |       |   ---index.js
        |       |   ---action.js
        |       + --routes/                    ---路由配置文件
        |       |   ---index.js
        |       |   ---config.js
        |       + --style/                     ---自定义样式文件
        |       |   +--antd/
        |       |   ---index.less
        |       + --utils/                     ---功能函数文件
        |       |   ---index.js
        |       |   ---toots.js
        |       + .app.js
        |       + .index.js                    ---入口文件
        |
        |
        + --theme/                             ---主题配置文件
        + .gitignore                           ---git提交忽略文件
        + .npmignore                           ---npm忽略文件
        + .prettierrc                          ---代码格式验证配置文件
        + .eslintrc                            ---自定义eslint规则
        + .package.json                        ---项目信息及相关依赖文件
        + .README.md                           ---项目说明文件

## 功能模块

-   静态登陆
-   首页
-   自定义导航
-   自定义表单
-   数据可视化
-   自定义组件

1.

-   图片库

        ![自定义表单](src/assets/img/form,png)

## 功能展示

## 开发模式

-   组件化开发
-   配置化开发

注：

1. 公共组件开发：该模块开发减少自身 state,更多点通过父组件传递 props 进行控制
2. 组件分为 ui 组件和逻辑组件，功能要单一

## 坑点

## 结尾

项目中存在的问题和有优化的地方，希望大家多多的指出 👏👏👏👏👏👏。
如果有相关的疑惑，可以加入 QQ 群与我联系：

-   254486893

赠人玫瑰，手有余香，希望对大家有所帮助，同时你觉得有所获得的话，那就戳一个 star 吧~~❤️❤️❤️❤️❤️，感谢! :pray: :pray: :pray:
