"use strict";
exports.__esModule = true;
//http://jsonplaceholder.typicode.com/todos/1
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (resp) {
    console.log(resp.data);
});
