const GRPC = require('./protos');

module.exports = class PluginData extends GRPC {
  constructor(host) {
    super({
      host,
      clazz: 'PluginData',
      isSecure: false,
    });
  }

  getPluginOAuth2Info(...args) {
    return this.client.getPluginOAuth2Info(...args);
  }

  storePluginOAuth2Info(...args) {
    return this.client.storePluginOAuth2Info(...args);
  }

  deletePluginOAuth2Info(...args) {
    return this.client.deletePluginOAuth2Info(...args);
  }

  getPluginData(...args) {
    return this.client.getPluginData(...args);
  }

  storePluginData(...args) {
    return this.client.storePluginData(...args);
  }

  deletePluginData(...args) {
    return this.client.deletePluginData(...args);
  }
};
