TimeCat
=======

> 【此处留白】-图片社交分享App

技术栈
------

前端：Vue2 + Vuex + Vue-Router2 + Axios + Webpack + ES6/7 + Less

项目安装
--------

```bash

# clone或者download项目
git clone https://github.com/hicoldcat/TimeCat.git

# 进入项目文件夹
cd TimeCat

# 安装依赖
npm install

```

项目运行
--------

```bash
# serve with hot reload at localhost:8080
npm run dev
```

项目编译打包
------------

```bash
# build for production with minification
npm run build

```

项目结构
--------

```
|-- api                            // 项目接口定义
|
|-- build                            // webpack配置文件
|
|-- config                           // 项目配置文件
|
|-- dist                            // 项目打包文件
|
|-- timecat                          // 上线项目文件，放在服务器即可正常访问
|
|-- screenshots                      // 项目截图
|
|-- src                              // 源码目录
|   |-- assets                       //项目公共资源
|   |-- components                   // 组件库
|   |-- router                       //路由文件
|   |-- store                        // vuex的状态管理
|   |-- style                        // 各种样式文件
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- static                          //一些静态资源，不会被webpack编译
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```

项目说明
--------

> 项目目标是做一个基于vue全家桶的移动端图片分享app
>
> 后期会把后端也加进来，前端和后端打通，做一个完整的可上线发布的app
>
> 最终希望项目可以将原型图设计、切图、标注、开发、测试和上线等一整套完整开发流程尝试一遍，以全栈工程师为目标

项目风格
--------

> 简约 文艺 清新

贡献
----

> 由于本人前端小菜鸟一枚，如果有任何的问题，欢迎给我提issue
>
> 如果此项目对你有帮助，可以给个star哦

#### 项目正在开发中......
