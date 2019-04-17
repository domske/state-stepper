/**
 * https://github.com/domske/state-stepper/issues/1
 * Until there are Angular compiler issues, it's only possible to embed the html and css string.
 * This is horrible. But currenlty there is no other known solution.
 */

const fs = require('fs-extra');
fs.removeSync('./dist');

// const sass = require('node-sass');
// const fs = require('fs');

// const filePath = './src/components/state-stepper/state-stepper.component';

// /**
//  * SCSS
//  */

// {
//   const result = sass.renderSync({
//     file: filePath + '.scss'
//   });

//   let css = Buffer.from(result.css).toString('utf8');
//   css = 'export default `' + css + '`';
//   fs.writeFileSync(filePath + '.css.ts', css);
// }

// /**
//  * HTML
//  */
// {
//   const result = fs.readFileSync(filePath + '.html');
//   const html = 'export default `' + result + '`';
//   fs.writeFileSync(filePath + '.html.ts', html);
// }
