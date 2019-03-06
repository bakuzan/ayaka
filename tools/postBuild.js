const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const fileName = 'package.json';
const projectRoot = path.resolve(__dirname, '../', fileName);
const buildFolder = path.resolve(__dirname, '../build', fileName);

async function copyPackageJson() {
  fs.copyFile(projectRoot, buildFolder, (err) => {
    if (err) {
      throw err;
    }

    console.log(chalk.magenta(`${fileName} copied to ${buildFolder}`));
  });
}

copyPackageJson();
