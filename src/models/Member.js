const Sequelize = require('sequelize');
const db = require('../config/database');

const Member = db.define('members', {
    id: {
        type: Sequelize.INTEGER(18),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
}, {
    tableName: 'members',
    // timestamps: false
});

module.exports = Member;
