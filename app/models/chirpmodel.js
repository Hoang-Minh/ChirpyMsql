var Sequelize = require("sequelize");
var config = require("../config/connection");

var Chirp = config.define("chirps", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    author: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
})

Chirp.sync();

module.exports = Chirp;