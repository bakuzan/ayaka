const fs = require('fs');
const path = require('path');
const execa = require('execa');
const chalk = require('chalk');

const projectRoot = path.resolve(__dirname, '../');
const buildFolder = path.resolve(__dirname, '../build');

async function copyRootFile(fileName) {
  fs.copyFile(
    path.resolve(projectRoot, fileName),
    path.resolve(buildFolder, fileName),
    (err) => {
      if (err) {
        throw err;
      }

      console.log(chalk.magenta(`Copied ${fileName} to ${buildFolder}`));
    }
  );
}

async function babelJS() {
  await execa.shell(
    `npx babel ${buildFolder} --out-dir ${buildFolder} --extensions=.js --presets @babel/preset-env --source-maps --env-name "build"`,
    {
      stdio: ['pipe', 'pipe', 'inherit']
    }
  );

  console.log(chalk.green(`Files in ${buildFolder} transpiled successfully.`));
}

function run() {
  babelJS();
  copyRootFile('package.json');
  copyRootFile('README.md');
}

run();
