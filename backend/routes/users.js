const router = require('express').Router();
let User = require('../models/user.model');

// .find is a mDB method
router.route('/').get((req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username; // new usernmae part of request body in post

  const newUser = new User({username});

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
