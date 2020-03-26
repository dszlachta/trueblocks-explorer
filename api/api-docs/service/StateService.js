'use strict';


/**
 * /state
 *
 * addrs String one or more addresses (0x...) from which to retrieve balances
 * blocks String an optional list of one or more blocks at which to report balances&#44; defaults to 'latest' (optional)
 * mode String control which state to export (optional)
 * changes String only report a balance when it changes from one block to the next (optional)
 * no_zero String suppress the display of zero balance accounts (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.stateGET = function(addrs,blocks,mode,changes,no_zero,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

