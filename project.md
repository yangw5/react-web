<!--
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-16 14:46:29
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-16 17:54:37
 * @FilePath: \react-web\project.md
 -->

# 项目开发

## 项目搭建

1.  脚手架项目搭建

    yarn create react-app react-web-ts --template typescript

2.  项目依赖下载

    -   antd 4.0.3 （全局引入样式 组件引入）[官网](https://ant.design/docs/react/use-in-typescript-cn)
    -   lodash
    -   axios
    -   query-string： url 参数解析（queryString.stringify，queryString.parse）
    -
    -   react-router-dom

3.  项目结构调整

    assets axios components constant interfance routes style utils 等

4.  自定义全局样式覆盖

    style 里面为自定义全局样式 在 index 引入相关样式入口进行覆盖

5.  相关规范配置
    .eslintrc .prettierrc .gitignore .commitlintrc tsconfig.json .npmignore 等

## 项目开发

1. 路由配置
2. axios 封装配置
