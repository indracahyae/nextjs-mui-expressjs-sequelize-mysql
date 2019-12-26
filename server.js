const express = require('express')
var { app } = require('./app')

const port = parseInt(process.env.PORT, 10) || 3000
const handle = app.getRequestHandler()

var logger = require('morgan');
var path = require('path');

// init routes
var r_movie = require('./routes/movie')

app.prepare().then(() => {
    const server = express()

    // custom setting
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(express.static(path.join(__dirname, 'public')));
    server.use(logger('dev'));  //log saat development

    // routes
    server.get('/', (req, res) => {
        return app.render(req, res, '/index')
    })
    server.use('/api', r_movie)

    server.all('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
