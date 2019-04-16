var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var sd = require('silly-datetime')
var router = require('./router')
var student = require('./student')


var app = express()

//配置使用art-template模板引擎
//第一个参数（此时为HTML），表示当渲染以.HTML结束的文件时，使用art-template模板引擎
app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('./node_modules'))
app.use('/public/', express.static('./public'))
app.use('/static/', express.static('./static'))
//配置模板引擎和 body-parse一定要在挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

//把路由容器挂载到 app 服务中
// student.find(function(err, student1){
//   console.log(student1)
// })


// app.post('/postreview', function (req, res) {
//   var comment = req.body
//   comment.date = updatetimes
//   comments.unshift(comment)
//   res.redirect('/index')
// })

app.listen(3000, function (req, res) {
  console.log('running at 3000')
})