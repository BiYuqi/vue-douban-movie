const express = require('express')
const request = require('superagent')

const app = express()
const HOST = 'http://api.douban.com/v2'

/**
 * CORS support.
 */

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.get('/movie/in_theaters', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      return error
    }
    console.log(res)
  })
})

app.get('/movie/coming_soon', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      return error
    }
  })
})

app.get('/movie/search', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      return error
    }
  })
})

app.listen(8081, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8081')
})
