'use strict';

var path = require('path');
var FileWriter = require('../tools/file-writer');
var config = require('../config/variables');


var nodemonConfig = {
    '////': '//',
    '///': 'WARNING: This file is generated by ' + path.basename(__filename) + ' - do not edit manually!',
    '//': '////',
    verbose: true,
    ext: 'js jsx',
    env: {
        NODE_ENV: process.env.NODE_ENV
    },
    delay: 200, // Debounce nodemon restarts. Note: nodemon restarting too often can screw with HMR.
    ignore: [
        '.idea',
        '.sass-cache',
        path.relative(config.paths.root, config.paths.components) + '/*', // ignore frontend files to minimize server restarts
        path.relative(config.paths.root, config.paths.webRoot) + '/*' // ignore compiled bundles & static frontend files
    ]
};


module.exports = function () {
    FileWriter.write('nodemon.json', JSON.stringify(nodemonConfig, null, 2));
};
