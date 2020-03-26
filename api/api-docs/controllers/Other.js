'use strict';

var utils = require('../utils/writer.js');
var Other = require('../service/OtherService');

module.exports.quotesGET = function quotesGET (req, res, next, freshen, period, pair, fmt, help, accept) {
  Other.quotesGET(freshen, period, pair, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
