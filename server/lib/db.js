var mongoose = require('mongoose');

var DB_URL = 'mongodb://localhost:27017/beauty';

mongoose.connect(DB_URL);


// 解决报错：(node:11104) DeprecationWarning: current URL string parser is deprecated, 
// and will be removed in a future version. To use the new parser, 
// pass option { useNewUrlParser: true } to MongoClient.connect.
// 根据字面意思就是，这个parser有点过时了?我们应该使用新的方法把{ useNewUrlParser: true }移动到MongoClient.connect的参数中。

mongoose.connect(DB_URL, {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err)
　　}else{
　　　　console.log('Connection success!')
　　}
})
mongoose.connection.on('connected', function () {
    console.log('数据库连接成功...')
})

mongoose.connection.on('error', function () {
    console.log('数据库连接失败...')
})

mongoose.connection.on('disconnect', function () {
    console.log('数据库断开连接...')
})

module.exports = mongoose;