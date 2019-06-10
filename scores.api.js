"use strict";


const express = require("express");
const scores = express.Router();
const pool = require("./connection");


function selectAll(res) {
    pool
    .query("select * from questions order by id")
    .then(result => res.json(result.rows));

}



scores.get("/scores", (req, res) => {
    selectAll(res);
});


scores.post("/scores/:id", (req, res) => {
    pool
    .query(
        "update scores set username=$1::text, score=$2::int ",
        [
            req.body.username,
            req.body.score,
            
        ]

    )
    .then(() => {
        selectAll(res);
    });
});


module.exports = scores;
