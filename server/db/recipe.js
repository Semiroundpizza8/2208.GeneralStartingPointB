const Sequelize = require('sequelize');
const db = require('./db');

const Recipe = db.define("recipe", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timeToMake: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        defaultValue: "unknown"
    }
})

module.exports = Recipe;