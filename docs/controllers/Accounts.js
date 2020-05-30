'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.abiGET = function abiGET (req, res, next, addrs, canonical, generate, noconst, sol, fmt, help, accept) {
  Accounts.abiGET(addrs, canonical, generate, noconst, sol, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exportGET = function exportGET (req, res, next, addrs, appearances, logs, traces, balances, count_only, articulate, fmt, help, accept) {
  Accounts.exportGET(addrs, appearances, logs, traces, balances, count_only, articulate, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listGET = function listGET (req, res, next, addrs, fmt) {
  Accounts.listGET(addrs, fmt)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.namesGET = function namesGET (req, res, next, terms, expand, match_case, owned, custom, prefund, named, addr, fmt, help, accept) {
  Accounts.namesGET(terms, expand, match_case, owned, custom, prefund, named, addr, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.slurpGET = function slurpGET (req, res, next, addrs, blocks, type, fmt, help, accept) {
  Accounts.slurpGET(addrs, blocks, type, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
