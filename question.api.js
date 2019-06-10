//get the 10 random questions

const express = require("express"); //express 
const router = express.Router();
const pool = require("./connection");// use pool connection to make querys


function selectAll(res) {
    pool
    .query("SELECT * FROM questions order by random() limit 10")
    .then(result => res.json(result.rows));
}



router.get("/questions", (req, res) => {
    selectAll(res);
});


module.exports = router;
