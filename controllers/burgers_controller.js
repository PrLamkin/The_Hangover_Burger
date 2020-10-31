var express = require("express");
var burger = require("../models/burger.js")
var router = express.router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerBurger = {
            burgers: data
        };
        res.render("index", burgerBurger);
    });
});

router.post("/insertOne", function(req, res) {
    burger.insertOne(req.body.burger_name, function(cheese) {
        res.redirect("/")
    });
});