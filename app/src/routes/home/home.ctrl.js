"use strict";

const User = require("../../models/User")
const MobileDetect = require("mobile-detect");


const output = {
    home: (req, res) => {
        // md = new MobileDetect(req.headers['user-agent'])
        // if(md.mobile() == null) {
        //     res.render("home/index");
        // }
        // else {
        //     res.render("mobile/index");
        // }
        res.render("mobile/index");
    },  
    mHome: (req, res) => {
        res.render("mobile/index");
    },  
    mFamilyCare: (req, res) => {
        res.render("mobile/familyCare");
    },  
    mVisitCare: (req, res) => {
        res.render("mobile/visitCare");
    },  

    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

 


const process = {
    login: async (req, res) => {
        const user =  new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user =  new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};