const sequelize = require('../sequelize');

async function reset() {
    console.log('Will rewrite the database.');

    await sequelize.sync({ force: true });
    await sequelize.close();

    console.log('Done!');
}

reset();