const GRPC = require('./protos');

module.exports = class PluginInstaller extends GRPC {
  constructor(host) {
    super({
      host,
      clazz: 'PluginInstaller',
      isSecure: true,
    });
  }
};
