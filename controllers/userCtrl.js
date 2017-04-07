'use strict'

const User = require('../models/user')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register' });
}

module.exports.create = ({ body: { email, password, confirmation } }, res) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then( (user) => {
      if (user) return res.render('register', { msg: 'Email is already registered'})
        return User.forge({email, password})
      .save()
      .then( () => {
        res.redirect('/')
      })
      // catch for the save()
      .catch( (err) => {
        console.log("error catch", err)
        res.render('register', {msg: "Dang, There was probz (with save). Try again"})
    })
    })
    //catch for find one by email
    .catch((err) => res.render('register', {msg: "Dang, There was probz (finding email). Try again"}))

  } else {
    res.render('register', { msg: 'Oops, Password and Confirmation do not match' })
  }
}
