const M_Movie = require('../models').Movie;
var { app } = require('../app')

module.exports = {
    getMovie: (req, res) => {
        M_Movie.findAll()
            .then((datas) => {
                // console.log(datas);
                res.status(200).send(datas);
            })
            .catch((error) => res.status(400).send(error));
    },
    detailMovie: (req, res) => {
        M_Movie.findAll({
            where: {
                id: req.params.id
            }
        })
            .then((data) => {
                res.status(200).send(data[0]);
            })
            .catch((error) => res.status(400).send(error));
    },
    moviePage: (req, res) => {
        return app.render(req, res, '/index')
    }
};