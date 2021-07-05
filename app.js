//const express = require('express');
//const app = express();
//app.listen(3000, function() {
//    console.log("서버 가동");
//})

//require('http').createServer(function(request, response)
 //{ // response 객체의 메소드인 writeHead 를 사용하여 type 을 결정
     // 우선 html 파일을 웹에 띄워준다고 생각 
  //   response.writeHead(200, { 'Content-Type' : 'text/html'} ); 
     // end 라는 메소드를 이용하여 html 파일이나 html 소스를 보내 
     // 그 폼을 웹에 띄움 
    // response.end('<h1>hello world</h1>'); 
//}).listen(52273);

"use strict";


//이거는 모듈임
const express = require('express')
const app =express()

 
//이거는 라우팅 이라는데 걍 경로 정한뒤 가져오는거 같음 
//라우팅이 url에 들어가면 그거에 대한 길을 찾아주는 애들

const home =require("./routes/home")

//앱 세팅
app.set("views", "./views");
//먼저 폴더를 알려주고 그다음에 어떻게 작성할지 알려줘서 끝내는거
app.set("view engine", "ejs");

app.use("/", home);
//미들웨어 use -> 미들웨어를 등록해주는 메서드

module.exports = app;

/** 
 * 원래는 res.send( ~~~~`)이렇게 안에 html문서를 적었는데
 * mvc모델로 바꿨음
 * 
*/









