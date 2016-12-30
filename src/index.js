var express = require('express');
const fs = require('fs');//加载框架
var app = express();
app.use(express.static('src'));////把相对于“我”的目录a作为我们的web服务目录目录与服务器同级目录
app.all('*',(req,res,next) =>{
	res.header("Access-Control-Allow-Origin","*");
    next();
})
//主页端口
app.get('/1',function(req,res){
    fs.readFile('data/1.json',function(err,data){
    	console.log(1)
    	res.send(data)//发送json文件
    });
})
app.get('/2',function(req,res){
    fs.readFile('data/2.json',function(err,data){
    	console.log(2)
    	res.send(data)//发送json文件
    });
})
//店铺详情页端口
app.get('/4',function(req,res){
   fs.readFile('data4.json',function(err,data){
    	console.log(4)
    	res.send(data)//发送json文件
    });
})
app.listen(4005,function(){
	console.log('服务已启动')
})