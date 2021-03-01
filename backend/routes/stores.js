const router = require('express').Router();
let Store = require('../models/stores.model');

router.route('/').get((req, res) => {
    Store.find()
        .then(stores => res.json(stores))
        .catch(err => res.status(400).json('Error' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const countryCode = req.body.countryCode;
    const email = req.body.email;
    const address1 = req.body.address1;
    const city = req.body.city;
    const country = req.body.country;

    const newStore = new Store({
        name,
        phoneNumber,
        email,
        address1,
        city,
        country,
        countryCode
    })

    newStore.save()
        .then(() => res.json('Store Created! '))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;