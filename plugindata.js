const GRPC = require('./protos');

module.exports = class PluginData extends GRPC {
  constructor(host) {
    super({
      host,
      clazz: 'PluginData',
      isSecure: false,
    });
  }

  run(func, data) {
    return new Promise((resolve, reject) => {
      this.client[func](data, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  getPluginOAuth2Info(caller, oAuthType) {
    return this.run('getPluginOAuth2Info', { caller, oAuthType });
  }

  storePluginOAuth2Info(caller, oAuthType, oAuth2Data) {
    return this.run('storePluginOAuth2Info', { caller, oAuthType, oAuth2Data });
  }

  deletePluginOAuth2Info(caller, oAuthType) {
    return this.run('deletePluginOAuth2Info', { caller, oAuthType });
  }

  getPluginData(key, caller) {
    return this.run('getPluginData', { key, caller })
      .then(res => JSON.parse(res.data.toString('utf8')));
  }

  storePluginData(key, caller, data) {
    return this.run('storePluginData', { key, caller, data: Buffer.from(JSON.stringify(data)) })
      .then(res => JSON.parse(res.data.toString('utf8')));
  }

  deletePluginData(key, caller) {
    return this.run('deletePluginData', { key, caller })
      .then(res => JSON.parse(res.data.toString('utf8')));
  }
};
