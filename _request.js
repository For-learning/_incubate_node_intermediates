'use strict'

let request = require('request');

request
    .get('http://baidu.com/')
    .on('response', function (response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) // 'image/png'
    });

// For more info please reach out of 'https://github.com/request/request#table-of-contents'