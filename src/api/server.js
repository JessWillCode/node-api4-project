const express = require('express');
const cors = require('cors');

const usersRouter = require('./routers/users-router.js');
// const registerRouter = require('./routers/register-router.js');
// const loginRouter = require('./routers/login-router.js');


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