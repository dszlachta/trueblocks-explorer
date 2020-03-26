'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.statusGET = function statusGET (req, res, next, modes, details, list, report, fmt, help, accept) {
  Admin.statusGET(modes, details, list, report, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
