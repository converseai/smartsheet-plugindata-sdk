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

  getPluginOAuth2Info(data) {
    return this.run('getPluginOAuth2Info', data);
  }

  storePluginOAuth2Info(data) {
    return this.run('storePluginOAuth2Info', data);
  }

  deletePluginOAuth2Info(data) {
    return this.run('deletePluginOAuth2Info', data);
  }

  getPluginData(data) {
    return this.run('getPluginData', Buffer.from(JSON.stringify(data)))
      .then(res => JSON.parse(res.data.toString('utf8')));
  }

  storePluginData(data) {
    return this.run('storePluginData', Buffer.from(JSON.stringify(data)))
      .then(res => JSON.parse(res.data.toString('utf8')));
  }

  deletePluginData(data) {
    return this.run('deletePluginData', Buffer.from(JSON.stringify(data)))
      .then(res => JSON.parse(res.data.toString('utf8')));
  }
};
