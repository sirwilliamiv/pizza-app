//a model is defining one instance Hence the singular
'use strict'

const  { bookshelf } = require('../db/database');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts'
})

module.exports = Contact
