const express = require('express');
const app = express();
const cluster = require('cluster');

const data = require('../data.json');

if (cluster.isMaster) {
    console.log('this is masters fork');
    cluster.fork();
} else {

    app.get('/', (req, res) => {
        res.send(data)
    });

    app.listen(5000)
}

