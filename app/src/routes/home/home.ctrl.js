"use strict";

const User = require("../../models/User")


const output = {
    home: (req, res) => {
        res.render("home/index");
    },  
    mHome: (req, res) => {
        res.render("mobile/index");
    },  
    mFamilyCare: (req, res) => {
        res.render("mobile/familyCare");
    },  
    mvisitCare: (req, res) => {
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