- 项目自定义配置 webpack

  - 查看 package.json 运行里面的命令 yarn eject 将配置弹到顶层接管配置。

- 项目使用 less

  - yarn add less less-loader
  - 增加 webpack.config.js 相关配置

        const lessRegex = /\.less$/;
        const lessModuleRegex = /\.module\.less$/;//测试配置  可省略

        //ruler增加
            {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 1,
                  modules: true, // 增加这个可以通过模块方式来访问css
                  sourceMap: isEnvProduction && shouldUseSourceMap
                },
                "less-loader"
              ),
              sideEffects: true
            },
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 1,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent
                },
                "less-loader"
              )
            },

- 修改 antd 主题,热加载,样式覆盖

  - 上面的 less-loader 配置 增加

        modifyVars: { "primary-color": "#5f4280" }

  - 函数 getStyleLoaders = (cssOptions, preProcessor, newOptions)增加一个参数，并且函数里面的 options 增加 newOptions 属性
    options: {
    ...newOptions,
  - 注意 package.json 的 babel 属性增加（热加载）和入口文件的 antd 样式引入改为 less

        "plugins": [
          [
            "import",
            {
              "libraryName": "antd",
              "style": true
            }
          ]
        ]
