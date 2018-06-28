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
    this.client.getPluginOAuth2Info(...args);
  }

  storePluginOAuth2Info(...args) {
    this.client.storePluginOAuth2Info(...args);
  }

  deletePluginOAuth2Info(...args) {
    this.client.deletePluginOAuth2Info(...args);
  }

  getPluginData(...args) {
    this.client.getPluginData(...args);
  }

  storePluginData(...args) {
    this.client.storePluginData(...args);
  }

  deletePluginData(...args) {
    this.client.deletePluginData(...args);
  }
};
