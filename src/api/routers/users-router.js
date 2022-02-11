const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.status(201).json ([
        {"username": "Ethan" ,"password": "music"},
        {"username": "Jake" ,"password": "games"},
        {"username": "Jess" ,"password": "code"}
        ])
});


module.exports = router;