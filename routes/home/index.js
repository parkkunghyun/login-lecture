"use strict";


const express =require('express')
const router = express.Router();


const ctrl = require("./home.ctrl")

//res.render는 파일 이름을 적어주면됨 views는 위에 적었으니 home에 index적으면 된다

router.get("/", ctrl.home)
router.get("/login", ctrl.login)
//어떠한 작동을 하는 거 
//ctrl.output.home


module.exports = router;
//외부로 내보내기