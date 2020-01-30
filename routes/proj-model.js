const db = require('../seeds/db.config.js')

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
    .insert(count, City, State, Attend, Church)
    .then((ids) => { 
        // const [ id ] = ids
        // console.log('id', id); 
        return findById(ids)
    });
}

function findById(id){
    return db('SBCs')
    .select('count', 'City', 'State', 'Attend', 'Church')
    .where(id)
    .first()
}