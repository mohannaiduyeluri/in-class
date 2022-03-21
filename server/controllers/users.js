/* Om Sai Ram
*/
const express = require('express');
const app = express.Router();

const user = require('../models/user');

app
    .get('/', (req, res) => {
        res.send(user.list);
    })
    .get('/:id', (req, res) => {
        // const user = userModel.list.find(user => user.id === pareseInt(req.params.id));
        const user = userModel.get(req.params.id);
        res.send(user);
    })
    .get('/:id/:name', (req, res) => {
        console.log("things work");
    });
    
module.exports = app;