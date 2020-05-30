'use strict';


/**
 * /abi
 *
 * addrs String list of one or more smart contracts whose ABI to grab from EtherScan
 * canonical String convert all types to their canonical represenation and remove all spaces from display (optional)
 * generate String generate C++ code into the current folder for all functions and events found in the ABI (optional)
 * noconst String generate encodings for non-constant functions and events only (always true when generating) (optional)
 * sol String create the ABI file from a .sol file in the local directory (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.abiGET = function(addrs,canonical,generate,noconst,sol,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /export
 *
 * addrs String one or more addresses (0x...) to export
 * appearances String export a list of appearances (optional)
 * logs String export logs instead of transaction list (optional)
 * traces String export traces instead of transaction list (optional)
 * balances String export balance history instead of transaction list (optional)
 * count_only String display only the count of the number of data items requested (optional)
 * articulate String articulate transactions&#44; traces&#44; logs&#44; and outputs (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. text/plain (optional)
 * no response value expected for this operation
 **/
exports.exportGET = function(addrs,appearances,logs,traces,balances,count_only,articulate,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /list
 *
 * addrs String one or more Ethereum addresses
 * fmt String export format (optional)
 * no response value expected for this operation
 **/
exports.listGET = function(addrs,fmt) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /names
 *
 * terms String a space separated list of one or more search terms
 * expand String expand search to include all fields (default searches name&#44; address&#44; and symbol only) (optional)
 * match_case String do case-sensitive search (optional)
 * owned String include personal accounts in the search (optional)
 * custom String include your custom named accounts (optional)
 * prefund String include prefund accounts (optional)
 * named String include well know token and airdrop addresses in the search (optional)
 * addr String display only addresses in the results (useful for scripting) (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.namesGET = function(terms,expand,match_case,owned,custom,prefund,named,addr,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * /slurp
 *
 * addrs String one or more addresses to slurp from Etherscan
 * blocks String an optional range of blocks to slurp (optional)
 * type String which types of transaction to request (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.slurpGET = function(addrs,blocks,type,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

