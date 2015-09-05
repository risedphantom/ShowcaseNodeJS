// 1. Command line args
// 2. Environmental variables
// 3. Custom config file
var nconf = require('nconf');

nconf.argv()
  .env()
  .file({ file: './config/config.json' });

module.exports = nconf;