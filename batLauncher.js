const { spawn, exec } = require('node:child_process');
const { resolve, dirname, posix } = require('node:path');
const { existsSync } = require('node:fs');

const getPath = () => {
  const pathToBat = process.argv[2] ?? './demo.bat'
  const filePath = resolve(pathToBat)
  const exists = existsSync(filePath)
  if (exists) {
    const directory = dirname(filePath)
    const fileName = posix.basename(filePath)
    return { filePath, directory, fileName }
  }

  const errorMsg = `Bat file "${filePath}" does not exist!`
  throw new Error(errorMsg)
}

const init = () => {
  const { filePath, directory, fileName } = getPath()
  console.log('launch bat', filePath)

  const bat = spawn('cmd.exe', ['/c', filePath], { 
    shell: true,
    cwd: directory
  });

  bat.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  bat.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}

init();