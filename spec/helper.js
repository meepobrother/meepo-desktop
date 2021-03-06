var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'Bozon.app', 'Contents', 'MacOS', 'Bozon');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'Bozon');
      default:
        throw 'Unsupported platform';
    }
  }
};
