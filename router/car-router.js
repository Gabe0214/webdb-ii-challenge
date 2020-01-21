const router = require('express').Router()


const carsDB = require('./car-modal')



router.get('/', (req, res) => {
    carsDB.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({message: "Something wrong with the server"})
    })
})

router.post('/', (req, res) => {
    carsDB.insert(req.body)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "sorry something wrong with the server"})
    })
})

module.exports = router;