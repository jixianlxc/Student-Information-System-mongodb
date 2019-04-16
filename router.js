 var fs = require('fs')
// module.exports = function (app) {
var express = require('express')
var Student = require('./student')
var router = express.Router()

router.get('/students', function(req, res){

  // fs.readFile('./db.json', function(err, data) {
  //   var students = JSON.parse(data).students

  //   if (err) {
  //     return res.render('can not find ds.json')
  //   }
  //   //express 为 res对象提供了render这个方法 res.render('模板名'，{模板数据})
  //   //第一个参数不能写路径，直接写文件名，默认去view文件夹内找，
  //   // 默认的view路径可以用app.set('参数'，路径)来进行修改
  //   res.render('index.html', {
  //     //此处第一个students是模板引擎的变量名，第二个students是data中的students
  //     students: students
  //   })
  //   console.log(students)
  // })

  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send('server error')
    }
    res.render('index.html',{
      students: students
    })
  })
})


router.get('/students/new', function(req, res){
  Student.updateById({
    id:1,
    name: 'LA',
    age:55
  },function(err){
    if(err){
      return console.log ('fail')
    }console.log('success')
  })
  res.render('new.html')

})


router.post('/students/new', function(req, res){
  // console.log(req.body)
  var student = req.body
  Student.save(student, function(err) {
    if(err){
      res.status(500).send('server error')
    }
    res.redirect('/students')
  })
})


router.get('/students/edit', function(req, res){
  

  Student.findById(parseInt(req.query.id), function(err, student){
    if (err) {
      return res.status(500).send('server error')
    }
    res.render('edit.html',{
      student: student
    })
  })

})
router.post('/students/edit', function(req, res){
  Student.updateById(req.body, function (err) {
    if(err){
      return res.status(500).send('server error')

    }
    res.redirect('/students')
  })
})


router.get('/students/delete', function(req, res){
  Student.deleteById(req.query.id, function (err) {
    if(err){
      return res.status(500).send('server error')

    }
    res.redirect('/students')
  })
})


// }
module.exports = router