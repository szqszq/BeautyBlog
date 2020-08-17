var express = require('express');
var router = express.Router();
var classfiyModel = require('../Model/Classfiy');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// 设置获取get接口
router.get('/getclass', function (req, res) {
  classfiyModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});
// 设置提交post接口
router.post('/addclass', function (req, res) {
  console.log(req)
  var classfiy = req.body.classfiy;
  var per = req.body.per;
  var cls = new classfiyModel({
    name: classfiy,
    per: per,
    createtime: new Date()
  });
  cls.save(function (err, ress) {
    if (err) {
      console.log(err)
    } else {
      console.log(ress)
      classfiyModel.find({}, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      })
    }
  })
});
// 设置修改
router.post('/modclass', function (req, res) {
  var id = req.body.id;
  var classfiy = req.body.classfiy;
  var per = req.body.per;
  var modifyData = new classfiyModel({
    _id:id,
    name: classfiy,
    per: per,
    createtime: new Date()
  })
  classfiyModel.findByIdAndUpdate(id, modifyData, function (err, ress) {
    console.log(id)
    console.log(modifyData)
    classfiyModel.find({}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  })

})
// 设置删除
router.get('/delclass', function (req, res) {
  var id = req.query.id;
  console.log(id)
  classfiyModel.findByIdAndRemove(id, function (err, ress) {
    classfiyModel.find({}, function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
  })
})
module.exports = router;
