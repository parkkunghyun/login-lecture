"use strict";

const home = (req, res)=> {
    res.render("home/index") 
}

const login = (req, res)=>{
    res.render("home/login")
}

module.exports = {
    home,
    login,
}

//컨트롤러임 
// 즉 