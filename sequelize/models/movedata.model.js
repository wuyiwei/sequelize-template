const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
    sequelize.define('movedata', {
        // The following specification of the 'id' attribute could be omitted
        // since it is the default.
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        companyid: {
            allowNull: true,
            type: DataTypes.INTEGER,
            comment: '公司id'
        },
        sourceSharid: {
            allowNull: true,
            type: DataTypes.INTEGER,
            comment: '来源分区'
        },
        targetShardid: {
            allowNull: true,
            type: DataTypes.INTEGER,
            comment: '计划搬移到目标分区'
        },
        state: {
            allowNull: true,
            type: DataTypes.ENUM,
            values: ['ready', 'running', 'delete_target', 'copy_table', 'delete_source', 'finish', 'error'],
            comment: '搬移的状态'
        },
        elapsed: {
            allowNull: true,
            type: DataTypes.INTEGER,
            comment: '搬移耗时'
        },
        totalrows: {
            allowNull: true,
            type: DataTypes.INTEGER,
            comment: '客户所有表数据行数总和'
        },
        errMessage: {
            allowNull: true,
            type: DataTypes.TEXT,
            comment: '失败后的错误日志'
        },
        companyRealname: {
            allowNull: true,
            type: DataTypes.STRING,
            comment: '客户名称'
        },
        userrealname: {
            allowNull: true,
            type: DataTypes.STRING,
            comment: '售后'
        },
        customerlevel: {
            allowNull: true,
            type: DataTypes.STRING,
            comment: '是否正式客户'
        },
        billscount: {
            allowNull: true,
            type: DataTypes.INTEGER,
            comment: '单据数量'
        },
        lastLoginDate: {
            allowNull: true,
            type: DataTypes.DATE,
            comment: '上一次登陆时间'
        },
        expireDate: {
            allowNull: true,
            type: DataTypes.DATE,
            comment: '过期时间'
        },
        explainRunTime: {
            allowNull: true,
            type: DataTypes.DATE,
            comment: '计划搬移时间'
        },
        specifyRunTime: {
            allowNull: true,
            type: DataTypes.DATE,
            comment: '客户指定搬移时间'
        }
    });
};