const { spawn } = require('node:child_process');
const { existsSync } = require('node:fs')

const getPath = () => {
  const pathToBat = process.argv[2] ?? './demo.bat'
  const exists = existsSync(pathToBat)
  if (exists) return pathToBat
  throw new Error(`Could not locate bat file: ${pathToBat}`)
}

const init = () => {
  const batPath = getPath()
  console.log('launch bat', batPath)
  // const bat = spawn('cmd.exe', ['/c', 'my.bat']);
  const bat = spawn('cmd.exe', [batPath]);

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