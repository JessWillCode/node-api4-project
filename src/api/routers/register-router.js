const express = require('express');
const router = express.Router()

router.post('/', (req,res) => {
    const newUser = req.body;
    res.status(201).json(newUser);
});

module.exports = router;