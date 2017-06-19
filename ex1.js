var express = require('express');
var express = require('helmet');
var app = express();
var path = require('path');
var request= require('request');

var fs = require('fs');
var port = 8000;

//example 1
/*var url="http://google.com";
request(url,function(err,resp,body){
    if(err){
        console.log(err);

    }else{
        console.log(body);
    }
});*/

//example 2
/*var destination = fs.createWriteStream('./downloads/google.html');
var url = "http://google.com";
request.url
    .pipe(destination);*/

//example 3
var destination = fs.createWriteStream('./downloads/google2.html');
var url = "http://google.com";
request(url)
    .pipe(destination)
    .on('finish',function(){
        console.log('done');
    })
    .on('error',function(err){
        console.log(err);
    });

app.listen(port);
console.log('servr is running on' +port);