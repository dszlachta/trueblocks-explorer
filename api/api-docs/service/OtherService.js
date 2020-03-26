'use strict';


/**
 * /quotes
 *
 * freshen String Freshen price database (append new data) (optional)
 * period String display prices in this increment (optional)
 * pair String which price pair to freshen or list (see Poloniex) (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.quotesGET = function(freshen,period,pair,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

