const db = require('../db.config.js')

module.exports = {
    find, 
    add, 
    findById, 
}

function find() { 
    return db('SBCs')
}

function add(item){ 
    const {count, City, State, Attend, Church} = item
    console.log('model item', item)
    return db('SBCs')
    .insert(item).returning('id')
    // .then(([id]) => { 
    //     // const [ id ] = ids
    //     // console.log('id', id); 
    //     return findById(id)
    // });
}

function findById(id){
    return db('SBCs')
    .select('id', 'count', 'City', 'State', 'Attend', 'Church')
    .where('id', id)
    .first()
}