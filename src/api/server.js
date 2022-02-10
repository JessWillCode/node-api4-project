const express = require('express');
const cors = require('cors');

const usersRouter = require('./users-router.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/users', usersRouter);

server.use('*', (req,res) => {
    res.status(500).json({
        message: `[${req.method}]: ${req.baseUrl} not found!`
    });
})

module.exports = server;