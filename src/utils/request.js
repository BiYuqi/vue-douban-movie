import axios from 'axios'
const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : 'https://heroku-douban-api.herokuapp.com/'
const server = axios.create({
  baseURL: HOST,
  timeout: 5000
})

server.interceptors.request.use(config => {
  config.headers['Content-type'] = 'application/json; charset=UTF-8'
  return config
}, error => {
  Promise.reject(error)
})

server.interceptors.response.use(response => {
  const res = response.data
  if (res.code === 401) {
    console.log('账户登录失效')
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default server
