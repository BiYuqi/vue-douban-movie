# 本地起服务

### 下载项目
```js
git clone https://github.com/BiYuqi/vue-douban-movie.git
cd vue-douban-movie
npm install
npm run dev // 起vue项目即可
```
#### 接着运行 node,启动服务， 注意：这一步的 node 转发服务一定要启动，要不然无法正常访问豆瓣 API
cd node-proxy

node index.js // 本期起服务 代理请求豆瓣api
# 发布
线上接口我已经发布在了[heroku](https://www.heroku.com/)(需要翻墙), github地址[douban-api2](https://github.com/BiYuqi/douban-api2)
