'use strict';
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        'Movie',
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            thumbnail: DataTypes.STRING,
            trailer: DataTypes.STRING,
        },
        {
            timestamps: false,
            tableName: 'movie'
        }
    );
    Movie.associate = function (models) {
        // associations can be defined here

    };
    return Movie;
};
