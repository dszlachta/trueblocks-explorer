'use strict';


/**
 * /status
 *
 * modes String which data to retrieve (optional)
 * details String include details about items found in monitors&#44; slurps&#44; abis&#44; or price caches (optional)
 * list String display results in Linux ls -l format (assumes --detail) (optional)
 * report String show a summary of the current status of the blockchain and TrueBlocks scrapers (optional)
 * fmt String export format (where appropriate) (optional)
 * help String get help on this command (optional)
 * accept String e.g. application/json (optional)
 * no response value expected for this operation
 **/
exports.statusGET = function(modes,details,list,report,fmt,help,accept) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

