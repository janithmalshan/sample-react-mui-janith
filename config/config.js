'use strict';

const config = require('./config.json');

module.exports = (() => {
    const environment = process.env.NODE_ENV;
    let environmentConfig = {};
    let fileName = '';
    if (environment) {
        fileName = `./${environment}.config.json`;
        try {
        //./${environment}
            environmentConfig = require(`./${environment}.config.json`);
        } catch (err) {
            console.warn(`Config file not found ${fileName}`);
        }
    }
    return Object.assign({}, config, environmentConfig);
})();