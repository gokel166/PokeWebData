const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mysql = require('mysql');

// Connect
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Glokgun166!',
    database : 'PokemonDat'
});

connection.connect(function(err){
    if (err) {
        Console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users

module.exports = router;