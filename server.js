const cds = require('@sap/cds');
cds.on('bootstrap', app => {
    const express = require('express');
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    });
    app.get('/ping', (req, res) => {
        res.send('pong');
    });
    });


    cds.on('served', () => {
        console.log('CAP services are up and running');
    });
    // cds.serve('all')
    // .in(process.cwd())

module.exports = cds.server();