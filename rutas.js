const express = require('express');
const router = express.Router();
const dbOperations = require('./dbRegistros')


router.route("/")
    .get((req, res) => {
        dbOperations.getRegistros().then(results => {
            res.json(results[0]);
        })
    })
    .post((req, res) => {
        let reg = req.body
        dbOperations.postRegistros(reg).then(results => {
            res.status(200).json(results)
        })
    })

router.route("/:id")
    .get((req, res) => {
        dbOperations.getRegistro(req.params.id).then(results => {
            res.json(results[0]);
        })
    })
    .put((req, res) => {
        dbOperations.putRegistro(req.body, req.params.id).then(results => {
            res.status(200).json(results)
        })
    })
    .delete((req, res) => {
        dbOperations.deleteRegistro(req.params.id).then(results => {
            res.status(200).json(results)
        })
    })


module.exports = router