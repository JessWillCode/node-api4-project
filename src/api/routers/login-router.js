const express = require('express');
const router = express.Router()

router.post('/', (req, res, next) => {
    const user = req.body;
    if(!user) {
        next();
    } else {
        res.status(201).json({
        message: 'Welcome to Hogwarts!'
        });
    }
});

module.exports = router;