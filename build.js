const execSync = require('child_process').execSync;
const fs = require('fs-extra');
const sass = require('node-sass');

fs.removeSync('./dist');
const filePath = './src/components/state-stepper/state-stepper.component';

/**
 * TS
 */
const tsStrOrg = fs.readFileSync(filePath + '.ts', 'utf8');

try {
  let tsStr = tsStrOrg;

  /**
   * SCSS
   */
  const cssRendered = sass.renderSync({
    file: filePath + '.scss'
  });

  let css = Buffer.from(cssRendered.css).toString('utf8');
  tsStr = tsStr.replace('{state-stepper.component.scss}', css);

  /**
   * HTML
   */
  const htmlStr = fs.readFileSync(filePath + '.html', 'utf8');
  tsStr = tsStr.replace('{state-stepper.component.html}', htmlStr);

  // Write modificated ts.
  fs.writeFileSync(filePath + '.ts', tsStr);

  execSync('npm run ngc');

  // Restore original ts.
  fs.writeFileSync(filePath + '.ts', tsStrOrg);

  // Update Demo App
  {
    const from = './dist';
    const to = './demo/state-stepper';
    const demoBuild = './demo/www';

    fs.removeSync(demoBuild);
    fs.removeSync(to);
    fs.copySync(from, to);

    execSync('npm run buildDemo');
  }

  // Update docs. (Demo Website)
  {
    const from = './demo/www';
    const to = './docs';

    fs.removeSync(to);
    fs.copySync(from, to);
    fs.removeSync(from);
  }
} catch (ex) {
  fs.writeFileSync(filePath + '.ts', tsStrOrg);
  throw ex;
}
