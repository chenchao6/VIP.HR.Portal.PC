# vip.hr.portal.pc

> 唯品会 HR Portal 项目

## Build Setup

``` bash
# install dependencies
# 安装项目依赖包
npm/cnpm install -dd

# build scss/sprites/img/copy third_party , to /static/
# 编译公用scss,生成雪碧图(定位scss文件生成到/src/assets/styles/下),压缩图片,复制third_party第三方库，到/static/下
npm run gulp

# 前端开发(无后端数据阶段)使用demo来编译,支持自动刷新,支持jsonServer模拟后端数据
npm run demo

# serve with hot reload at localhost:8080
# 前端开发(与后端对接阶段)使用dev来编译,支持自动刷新,支持代理转发后端API请求
npm run dev

# 使用dev开发项目的时候,调试地址为
[http://localhost:8080/staff.html](http://localhost:8080/staff.html)
[http://localhost:8080/admin.html/](http://localhost:8080/admin.html/)
[http://localhost:8080/hrbp.html/](http://localhost:8080/hrbp.html/)
[http://localhost:8080/personal.html/](http://localhost:8080/personal.html/)
[http://localhost:8080/search.html/](http://localhost:8080/search.html/)

# build for production with minification
# 生成生产环境代码(发布),打包到/dist/下,上传git供后端获取
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# eslint code
# 对项目代码进行语法检查
npm run lint
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 后端API接口文档
## [http://10.199.134.57/swagger/ui/index](http://10.199.134.57/swagger/ui/index)

## 设计稿文档
## [http://10.199.134.191:14000/index.html](http://10.199.134.191:14000/index.html)

## Project directory
## 项目目录结构

```shell
├──build
|  ├──build.js // 生产环境构建
|  ├──check-version.js // node&npm版本检测
|  ├──demo-server.js // demo环境构建
|  ├──dev-client.js // 开发环境引入hot-reload
|  ├──dev-server.js // 开发环境构建
|  ├──getEntryList.js // 获取多页面入口列表
|  ├──getHtmlInjectList.js // 多页面htmlWebpackPlugin列表
|  ├──utils.js // css相关loader引入的工具函数
|  ├──vue-loader.conf.js // css-loader引入
|  ├──webpack.base.conf.js // webpack基础配置
|  ├──webpack.demo.conf.js // webpack(demo环境)配置
|  ├──webpack.dev.conf.js // webpack(dev环境)配置
|  └──webpack.prod.conf.js // webpack(build环境)配置
├──config // 环境参数定义
├──node_modules
├──src
|  ├──api // ajax api
|  ├──common // 公共资源
|     |  └──...
|  └──views // 多页面入口
|     ├──admin // 管理员入口
|     |  ├──asserts
|     |  |  ├──img
|     |  |  ├──styles
|     |  |  |  ├──bulma // flex scss UI框架
|     |  |  |  ├──lib // scss基础工具库
|     |  |  |  |  └──sasscore // sasscore工具库(包括基础的css3、栅格布局、媒体查询、样式重置)
|     |  |  |  ├──theme // element——ui定制主题
|     |  |  |  ├──_nprogress.scss // 加载进度条样式
|     |  |  |  ├──_variable.scss // 定义UI样式变量值
|     |  |  |  ├──_xxx_icon.scss // 合并雪碧图生成的定位映射文件
|     |  |  |  └──ui.scss // UI框架调用入口文件
|     |  |  └──sprites // 雪碧图资源(合并雪碧图,资源映射复制到scss目录下) 1. 可在此目录下放图片,生成app_icon.png 2. 可在此目录下以文件夹为单位合并雪碧图,生成${foldername}_icon.png
|     |  ├──components // 页面组件
|     |  ├──directives // 自定义指令
|     |  ├──filters // 过滤函数
|     |  ├──pages // 多入口模板
|     |  ├──router // 路由文件
|     |  ├──utils // 公共函数
|     |  ├──views // 页面组件
|     |  └──vuex // 统一状态管理
|     |     ├──modules // vuex数据定义
|     |     └──store // vuex store初始化
|     ├──hrbp // hrbp入口
|     |  └──...
|     ├──personal // 个人中心入口
|     |  └──...
|     ├──search // 搜索入口
|     |  └──...
|     └──staff // 员工入口
|        └──...
├──staic // 静态文件生成目录
├──third_party // 第三方模块目录
├──gulpfile.babel.js // 公共scss编译(scss)、雪碧图合并(sprites)、图片压缩(images),复制third_party第三方库(copy)
└──package.json // gulp、dev、build打包入口,项目说明,模块依赖
```
## Project Standard
## 项目规范

1. 开发过程中开启eslint语法检查，规范团队开发代码
2. .vue文件的export default部分，按照顺序：

```shell
   ├──data // 内部数据
   ├──props // 外部传递数据
   ├──components // 组件
   ├──lifecycle hooks(beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/activated/deactived/beforeDestroy/destroyed) // 生命周期钩子
   ├──computed // 计算属性
   ├──watch // 属性监听器
   ├──methods // 方法
   └──others(filters/directives/routers...) // 其他属性
```

3. 通用组件开发遵守[BEM规范](http://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)
