# Bat Launcher
Kludgy tool to launch batch files using Node.js on a Windows machine.

## Example usage
Just call the batLauncher.js file via Node.js. The first argument is the path to your batch file.

```bash
node {path/to/bat-launcher}/batLauncher.js {path/to/your-bat-file.bat}
```
## Motivation
I needed to invoke a batch file as a service on a Windows server using [NSSM](https://nssm.cc/) and needed more flexibility on how it was launched.
