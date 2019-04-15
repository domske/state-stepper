const sass = require('node-sass');
const fs = require('fs');

const filePath = './src/components/state-stepper/state-stepper.component';

/**
 * SCSS
 */

{
  const result = sass.renderSync({
    file: filePath + '.scss'
  });

  let css = Buffer.from(result.css).toString('utf8');
  css = 'export default `' + css + '`';
  fs.writeFileSync(filePath + '.css.ts', css);
}

/**
 * HTML
 */
{
  const result = fs.readFileSync(filePath + '.html');
  const html = 'export default `' + result + '`';
  fs.writeFileSync(filePath + '.html.ts', html);
}
