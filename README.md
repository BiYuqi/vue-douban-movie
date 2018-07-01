# vue2.0 豆瓣电影WebApp

## 项目描述
## 技术栈：
* vue2.0 + vue-router + vuex：vue全家桶
* axios：用于ajax请求
* sass: 快速开发CSS的工具
* minirefresh: 下拉加载库
* vue-awesome-swiper：用于tab切换
* express: 用于搭建接口转发
* superagent: node服务端接口请求

## 功能实现
##### 项目基础
- [x] 项目基础搭建完毕
- [x] 服务端接口发布完毕

##### 热映模块
- [x] 包括正在上映，即将上映编写完毕

##### 搜索部分
- [ ] 搜索组件
- [ ] 城市选择

##### 找片模块
- [ ] top250模块
- [ ] top250列表模块
- [ ] 本周口碑榜
- [ ] 北美票房

## 本地开发环境起服务

### 下载项目
```js
git clone https://github.com/BiYuqi/vue-douban-movie.git
cd vue-douban-movie
npm install
npm run dev // 起vue项目即可

// npm run dev 这个地方运行错误的，大概率是sass出了问题
npm i sass-loader node-sass -S
```
#### 本地node服务

接着运行 node,启动服务， 注意：这一步的 node 转发服务一定要启动，要不然无法正常访问豆瓣 API
```js
cd node-proxy

node index.js
```
## 预览
![](http://oq4hkch8e.bkt.clouddn.com/WX20180628-004834@2x.png)

![](http://oq4hkch8e.bkt.clouddn.com/douban.gif)
## 发布
线上接口我已经发布在了[heroku](https://www.heroku.com/)(需要翻墙), github地址[douban-api2](https://github.com/BiYuqi/douban-api2)
