const knex = require('knex')
const knexConfig = require('../knexfile')

const dataBase = knex(knexConfig.development)



module.exports = {
    // names of database functions 

    find,
    insert
}


function find(){
    return dataBase('cars')
}


function insert(info){
    return dataBase('cars').insert(info)
}