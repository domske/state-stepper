const fs = require('fs-extra');

const from = './demo/www';
const to = './docs';

fs.removeSync(to);
fs.copySync(from, to);
fs.removeSync(from);
