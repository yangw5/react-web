/*
 * File: color.js
 * desc: 主题切换，生成颜色变量配置文件
 * File Created:
 * Author: yangw5
 * ======
 * Copyright
 */
const path = require("path");
const { generateTheme } = require("antd-theme-generator");

const options = {
  antDir: path.join(__dirname, "./node_modules/antd"),
  stylesDir: path.join(__dirname, "./src/style/antd"),
  varFile: path.join(__dirname, "./src/style/antd/variables.less"),
  mainLessFile: path.join(__dirname, "./src/style/antd/index.less"),
  themeVariables: ["@primary-color"],
  indexFileName: "index.html",
  outputFilePath: path.join(__dirname, "./public/color.less")
};

generateTheme(options)
  .then(less => {
    console.log("Theme generated successfully");
  })
  .catch(error => {
    console.log("Error", error);
  });
