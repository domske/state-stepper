const fs = require('fs-extra');

const from = './dist';
const to = './demo/state-stepper';
const demoBuild = "./demo/www";

fs.removeSync(demoBuild);
fs.removeSync(to);
fs.copySync(from, to);
