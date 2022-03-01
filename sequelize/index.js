const { Sequelize } = require('sequelize');
// const { mysqlConf } = require('./../config')
const log4js = require("log4js");

log4js.configure({
    appenders: {
        console: { type: 'console' },
        multi: {
            type: 'multiFile',
            base: 'logs/',
            property: 'level',
            extension: '.log',
            overwrite: false,
            maxLogSize: 104857600,
            backups: 1000,
            compress: true
        }
    },
    categories: { default: { appenders: ['multi', 'console'], level: 'debug' } }
});
const logger = log4js.getLogger('sequelize');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
    // timezone: '+08:00',
    benchmark: true,
    logging: logtext => logger.info(logtext),
    logQueryParameters: true
});

const modelDefiners = [
    require('./models/movedata.model'),
    // Add more models here...
    // require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;