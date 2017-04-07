'use strict'
const Contact = require('../models/contact');
module.exports.show = (req,res) => {
  res.render('contact', { page: 'Contact'})
}

module.exports.addContact = ({ body }, res, err) => {
  console.log("inside contact")
  //forge instatiates a new  body
  Contact.forge(body)
  .save()
  .then(() => res.redirect('/'))
  .catch(err)
}
