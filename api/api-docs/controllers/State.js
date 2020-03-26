'use strict';

var utils = require('../utils/writer.js');
var State = require('../service/StateService');

module.exports.stateGET = function stateGET (req, res, next, addrs, blocks, mode, changes, no_zero, fmt, help, accept) {
  State.stateGET(addrs, blocks, mode, changes, no_zero, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
