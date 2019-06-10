"use strict";
const express = require("express");
const animals = express.Router();
const pool = require("./connection");


function selectquestions(res) {
    pool
    .query("select * from questions limit 10")
    .then(results => res.json(results.rows))
}
    questions.get("/questions", (req, res) => {
        selectquestions(res);
});

