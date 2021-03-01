const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
// Load User model
let User = require('../models/user.model');

router.route('/').get((req,res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error' + err))
});

router.route('/add').post((req,res) =>{

    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address1: req.body.address1,
                city: req.body.city,
                country: req.body.country,
                dob: Date.parse(req.body.dob)
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
    
    // const username = req.body.username;
    // const firstName = req.body.username;
    // const lastName = req.body.username;
    // const email = req.body.username;
    // const address1 = req.body.username;
    // const city = req.body.username;
    // const country = req.body.username;
    // const password = req.body.username;
    // const dob = Date.parse(req.body.dob);

    // const newUser =  new User({
    //     username,
    //     firstName,
    //     lastName,
    //     email,
    //     address1,
    //     city,
    //     country,
    //     password,
    //     dob
    // })

    // newUser.save()
    //     .then(() => res.json('User added! '))
    //     .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;