const { models } = require('./sequelize');
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
const logger = log4js.getLogger();

(async () => {
    const taskid = await models.movedata.create({
            companyid: 515001,
            sourceSharid: 51,
            targetShardid: 52,
            state: 'running'
        })
        .then(result => { return result.id })
        .catch(err => { logger.error(err) })
    logger.info("插入数据 id 为:" + taskid);
})()