'use strict'

const environment = process.env.NODE_ENV || 'development';

const config = require('../knexfile')[environment];
const knex = require('knex')(config); ///passing knex (which is a function, the variable config)
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin(require('bookshelf-bcrypt'));

module.exports = { knex, bookshelf };
