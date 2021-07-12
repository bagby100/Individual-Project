const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("user/addOrEdit", {
        viewTitle: "User Registration"
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;