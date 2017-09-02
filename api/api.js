'use strict';  // støtte nyere js syntax
//server kode - har litt annen kodestil enn client js
// for å kjøre fila kjør med node kommando

//importer server
const express = require('express'); //finn fil express.js eller express mappe i node_modules
const helmet = require('helmet');
const hash = require('../shared/utils').hash; // bruker bare hash funksjonen
const bodyParser = require('body-parser');
const cors = require('cors'); // for å tillatte cors

const app = express(); // instansiere server
const port = 4321;

const store = {
    // key-value store

};

app.use(cors());
app.use(helmet()); // ta i bruk plugin i express
app.use(bodyParser.json()); // ta i bruk kun json biten av bodyParser - intercepter request og konverterer

app.get('/ping', (req, res) => {
    const result = {
        ok: true,
        timestamp: new Date()
    };

    res.json(result);
});

app.get('/lists', (req, res) => {
    const keys = Object.keys(store);
    if (keys.length === 0) {
        res.sendStatus(404);
    } else {
        res.json(keys);
    }

});

app.get('/lists/:identifier', (req, res) => {
    const hashedId = hash(req.params.identifier);
    const lists = store[hashedId];
    if (!lists) {
        res.sendStatus(404);
    } else {
        res.json(lists);
    }

});

app.post('/lists/:identifier', (req, res) => { //plukk ut identifier
    const hashedId = hash(req.params.identifier);
    console.log('store lists', hashedId, req.body); // debuggere funker ikke veldig bra med node så vi bruker console.log
    store[hashedId] = req.body; //  ferdig parset av bodyParser
    res.json({ok: true});
    console.log('store content', store);
});

app.delete('/lists/:identifier', (req, res) => {
    const hashedId = hash(req.params.identifier);
    const lists = store[hashedId];
    if (!lists) {
        res.sendStatus(404);
    } else {
        delete lists[hashedId];   // måten å slette en key value i object. Har ikke remove()
    }

});

console.log('Api server listening on port: ' + port);
app.listen(port);

