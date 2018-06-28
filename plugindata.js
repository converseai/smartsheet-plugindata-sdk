const GRPC = require('./protos');

module.exports = class PluginData extends GRPC {
  constructor(host) {
    super({
      host,
      clazz: 'PluginData',
      isSecure: false,
    });
  }
};
