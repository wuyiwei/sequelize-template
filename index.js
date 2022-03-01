const { models } = require('./sequelize');

(async () => {
    const taskid = await models.movedata.create({
            companyid: 515001,
            sourceSharid: 51,
            targetShardid: 52,
            state: 'running'
        })
        .then(result => { return result.id })
        .catch(err => { console.log(err) })
    console.log("插入数据 id 为:" + taskid);
})()