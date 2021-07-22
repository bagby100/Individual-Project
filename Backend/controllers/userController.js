const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.render("user/register", {
        viewTitle: "User Registration"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.country = req.body.country;
    user.zipcode = req.body.zipcode;
    user.age = req.body.age;
    user.favorite = req.body.favorite;
    user.save((err, doc) => {
        if (!err)
            res.redirect('user/login');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("user/register", {
                    viewTitle: "User Registration",
                    user: req.body
                });
            }
            else
                console.log('Error Inserting Account : ' + err);
        }
    });
}

function updateRecord(req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('user/login'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("user/register", {
                    viewTitle: 'Update User',
                    user: req.body
                });
            }
            else
                console.log('Error Updating Record: ' + err);
        }
    });
}

function login(req, res) {
    User.find({ email: req.body.email, password:req.body.email }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('http://localhost:8000/'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("user/login", {
                    viewTitle: 'User Login',
                    user: req.body
                });
            }
            else
                console.log('Email/Password Combination NOT FOUND: ' + err);
        }
    });
}

router.get('/login', (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.render("user/login", {
                viewTitle: 'User Login',
                list: docs
            });
        }
        else {
            console.log('Error Retrieving Page :' + err);
        }
    });
});



function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'age':
                body['ageError'] = err.errors[field].message;
                break;
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("user/register", {
                viewTitle: "User Registration",
                user: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/user/list');
        }
        else { console.log('Error Deleting User:' + err); }
    });
});

module.exports = router;