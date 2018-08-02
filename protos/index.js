const path = require('path');
const grpc = require('grpc');

module.exports = class GRPC {
  constructor({ host, clazz, isSecure = false }) {
    if (host === undefined || host === null) {
      throw new Error('GRPC Host not defined!');
    }
    if (clazz === undefined || clazz === null) {
      throw new Error('GRPC Class not defined!');
    }

    const cred = isSecure ? grpc.credentials.createSsl() : grpc.credentials.createInsecure();

    const proto = grpc.load({
      root: path.dirname(__filename),
      file: `github.com/planningto/smartsheet/service/${clazz.toLowerCase()}/${clazz.toLowerCase()}.proto`,
    });

    const deadline = new Date().setTime(new Date().getTime() + (3600 * 10)).toString();
    this.client = new proto[clazz.toLowerCase()][clazz](
      host,
      cred,
      { deadline },
    );

    process.on('exit', () => {
      this.close();
    });
  }

  close() {
    if (this.client !== undefined && this.client !== null) {
      this.client.close();
    }
  }
};
