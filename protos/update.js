#!/usr/bin/env node

const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
// const execSync = console.log;

const GROOT_GIT = 'git@github.com:planningto/groot.git';
const ROOT_DIR = 'planningto/groot/service';
const TMP_DIR = `${os.tmpdir}/planningto/groot`;
const PROTO_FILES = [
  'base/base.proto',
  'plugin/plugin.proto',
  'plugindata/plugindata.proto',
  'plugininstaller/plugininstaller.proto',
];

execSync(`rm -rf ${TMP_DIR}`);
execSync(`git clone ${GROOT_GIT} ${TMP_DIR}`);

PROTO_FILES.forEach((proto) => {
  const dirpath = path.join(__dirname, 'github.com', ROOT_DIR, path.dirname(proto));
  execSync(`mkdir -p ${dirpath}`);
  execSync(`cp ${path.join(TMP_DIR, 'service', proto)} ${dirpath}`);
});

execSync(`rm -rf ${TMP_DIR}`);
