# Vue 3 + Vite

## code struct
```text
|--src
|  |--App.vue   项目根组件，一级路由出口
｜ ｜--api    接口请求
｜ ｜--assets    静态资源
｜ ｜  ｜--icons  svg icon 图标
｜ ｜  ｜--images image 图标
｜ ｜  ｜--logo.png logo
｜ ｜--components 通用的业务组建，比如：一个组件在多个页面中使用到
｜ ｜--constants 常用
｜ ｜--directives 自定义指令
｜ ｜--libs 通用组件,不包括业务相关
｜ ｜--main.js  入口文件
｜ ｜--premission.js 页面权限控制中心
｜ ｜--router 路由
｜ ｜  ｜--index.js 路由处理中心
｜ ｜  ｜--modules 路由模块
｜ ｜  ｜  ｜--mobile-routes.js 移动端路由
｜ ｜  ｜  ｜--pc-routes.js PC路由
｜ ｜--store 全局状态
｜ ｜  ｜--getters.js  全局状态访问处理
｜ ｜  ｜--index.js  全局状态中心
｜ ｜  ｜--modules 状态子模块
｜ ｜--styles 全局样式
｜ ｜  ｜--index.scss 全局通用的样式处理
｜ ｜--utils 工具模块 
｜ ｜--vendor 外部供应资源
｜ ｜--views 页面组件，与components的区别在于 此处组件对应路由表，以页面的形式展示
｜     ｜--layout 用于PC端， 分割一级路由和二级路由
｜        ｜--components 该页面组件下的业务组建
｜        ｜--index.vue layout 组件
｜--tailwind.config.js waiwindcss 配置文件，与src平级
｜--vite.config.js vite配置文件，与src平级
```

## config npm mirror accelerate address 
```shell
npm config set registry https://registry.npm.taobao.org
```
## Init project commadn 
#### Install build utils
- nodejs
- npm
#### Install requirement packages
```shell
# install vue project build tool vite, vite has the same function webpack
npm install vite@3.2.0 
# install tailwindcss, as css plugin
npm install -D tailwindcss@3.0.23 postcss@8.4.8 autoprefixer@10.4.2
# init tailwindcss config and auto generate config file: tailwind.config.js, postcss.config.js
npx tailwindcss init -p
# install sass
npm i -D sass@1.45.0
```


