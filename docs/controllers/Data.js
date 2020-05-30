'use strict';

var utils = require('../utils/writer.js');
var Data = require('../service/DataService');

module.exports.blocksGET = function blocksGET (req, res, next, blocks, hashes_only, addrs, uniq, uniq_tx, count_only, fmt, help, accept) {
  Data.blocksGET(blocks, hashes_only, addrs, uniq, uniq_tx, count_only, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logsGET = function logsGET (req, res, next, transactions, articulate, fmt, help, accept) {
  Data.logsGET(transactions, articulate, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiptsGET = function receiptsGET (req, res, next, transactions, articulate, logs, fmt, help, accept) {
  Data.receiptsGET(transactions, articulate, logs, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracesGET = function tracesGET (req, res, next, transactions, articulate, count_only, fmt, help, accept) {
  Data.tracesGET(transactions, articulate, count_only, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsGET = function transactionsGET (req, res, next, transactions, articulate, trace, fmt, help, accept) {
  Data.transactionsGET(transactions, articulate, trace, fmt, help, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
