express = require('express') ; 


const Input = require('./proj-model');

const router = express.Router(); 

router.get('/churchs', (req, res) => { 
    Input.find()
    .then(churchs => { 
        res.status(200).json({churchs});
    })
    .catch(err => { 
        console.log('get request error': err)
        res.status(500).json({message: "error in get request: ", error: err})
    })
})
router.post('/set', (req, res) => { 
    console.log('router req', req.body)
    Input.add(req.body)

    .then(input => { 
        console.log('router churchs', input)
        res.status(201).json(input);
    })
    .catch(err => { 
        console.log('post err: ', err)
        res.status(500).json({message: 'error in response'})
    })
})

module.exports = router;