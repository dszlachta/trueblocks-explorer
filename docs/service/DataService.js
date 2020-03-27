'use strict';


/**
 * /blocks
 *
 * blocks String a space-separated list of one or more blocks to retrieve
 * hashes_only String display only transaction hashes&#44; default is to display full transaction detail (optional)
 * addrs String display all addresses included in the block (optional)
 * uniq String display only uniq addresses found per block (optional)
 * uniq_tx String display only uniq addresses found per transaction (optional)
 * count_only String display counts of appearances (for --addrs&#44; --uniq&#44; or --uniq_tx only) (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.blocksGET = function(blocks,hashes_only,addrs,uniq,uniq_tx,count_only,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /logs
 *
 * transactions String a space-separated list of one or more transaction identifiers (tx_hash&#44; bn.txID&#44; blk_hash.txID)
 * articulate String articulate the transactions if an ABI is found for the 'to' address (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.logsGET = function(transactions,articulate,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /receipts
 *
 * transactions String a space-separated list of one or more transaction identifiers (tx_hash&#44; bn.txID&#44; blk_hash.txID)
 * articulate String articulate the transactions if an ABI is found for the 'to' address (optional)
 * logs String display the receipt's logs (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.receiptsGET = function(transactions,articulate,logs,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /traces
 *
 * transactions String a space-separated list of one or more transaction identifiers (tx_hash&#44; bn.txID&#44; blk_hash.txID)
 * articulate String articulate the transactions if an ABI is found for the 'to' address (optional)
 * count_only String show the number of traces for the transaction only (fast) (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.tracesGET = function(transactions,articulate,count_only,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /transactions
 *
 * transactions String a space-separated list of one or more transaction identifiers (tx_hash&#44; bn.txID&#44; blk_hash.txID)
 * articulate String articulate the transactions if an ABI is found for the 'to' address (optional)
 * trace String display the transaction's trace (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.transactionsGET = function(transactions,articulate,trace,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

