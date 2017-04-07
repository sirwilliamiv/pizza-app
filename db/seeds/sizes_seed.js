'use strict'
const { knex } = require('../database');
const sizes = require('./sizes');

const sizePromise = sizes.map( ({name, inches}) => {
  //creates new array and saves to sizePromise
  return knex('sizes').insert({name, inches});
})

for ( let size in sizes) {
  sizePromise.push
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then( () => {
      // Inserts seed entries
      return Promise.all(sizePromise)
      // ]);
    });
};
