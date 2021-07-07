const churchs = require('./proj-model.js');
const db = require('../db.config.js');




describe('hobbits model', function() {
    
    
    
    
    describe('insert()', function() {
        beforeEach(async () => {
            await db('SBCs').truncate();
        })

        it('adds the new hobbit to the db', async function() {
            // call insert passing a hobbit
            
            
            // open the db and see that the hobbit is there
            await churchs.add({ count:55, City:'Miami', State:'FL', Attend:'4,500', Church:'First Baptist'});
            const Churchs = await db('SBCs').select('*');

            expect(Churchs).toHaveLength(1);
        })


    })
    

    
})
