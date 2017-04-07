'use strict'

const { bookshelf } = require('../db/database');
const { compare } = require('bcryptjs');

const User = bookshelf.Model.extend({
  tableName: 'users',
  bcrypt: { field: 'password' },


  comparePass: function(passwordStr) {
    console.log('password String from user', passwordStr);
    console.log("user", this.attributes)
    return compare(passwordStr, this.attributes.password)
  }
}, {
  findOneByEmail: function(email) {
    return this.forge({ email })
      .fetch()
      .then((user) => {
        console.log("Got User", user.get('email'))
        return user;
      })
      .catch((err) => {

        console.log('this happens when no email',err)
        return (null);
      })

  }
})

module.exports = User
