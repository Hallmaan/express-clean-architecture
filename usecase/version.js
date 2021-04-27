const VersionDomain = require('../domain/version');

class Version {
  display() {
    return VersionDomain.toString();
  }

  static toString() {
    return 'Version use case';
  }
}

module.exports = Version;