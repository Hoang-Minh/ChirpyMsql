var Sequelize = require("sequelize");
var config = require("../config/connection");

var Chirp = config.define("chirps", {    
    author: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
})

Chirp.sync();

module.exports = Chirp;