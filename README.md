### Goal

Demonstrate / reproduce the issue reported in https://github.com/rollup/rollup/issues/4995.

### Prerequisites

`node` and `npx` need to be installed.

First do an `npm install`.

### How-To

The issue can be reproduced both exec both of `@actions/exec` and `child_process`. The node scripts each use the respective `exec` function to invoke [test.sh](test.sh). The bash script uses `npx` to invoke _rollup_, first v3.21.5 (OK), then v3.21.6 (NOK). After that second invocation, the subsequent `echo` fails.

@actions/exec:

```
node actions.js
```

child_process:

```
node child_process.js
```

### Errors

@actions/exec:

```
Error occurred during test.sh: Error: The process '/bin/bash' failed with exit code null
    at ExecState._setResult (/Users/manu/incon.ai/rollup-stdout-repro/node_modules/@actions/exec/lib/toolrunner.js:592:25)
    at ExecState.CheckComplete (/Users/manu/incon.ai/rollup-stdout-repro/node_modules/@actions/exec/lib/toolrunner.js:575:18)
    at ChildProcess.<anonymous> (/Users/manu/incon.ai/rollup-stdout-repro/node_modules/@actions/exec/lib/toolrunner.js:469:27)
    at ChildProcess.emit (node:events:513:28)
    at maybeClose (node:internal/child_process:1091:16)
    at Socket.<anonymous> (node:internal/child_process:449:11)
    at Socket.emit (node:events:513:28)
    at Pipe.<anonymous> (node:net:322:12)
```

child_process:

```
Error occurred during test.sh: Error: Command failed: bash test.sh
[...]
    at ChildProcess.exithandler (node:child_process:419:12)
    at ChildProcess.emit (node:events:513:28)
    at maybeClose (node:internal/child_process:1091:16)
    at Socket.<anonymous> (node:internal/child_process:449:11)
    at Socket.emit (node:events:513:28)
    at Pipe.<anonymous> (node:net:322:12) {
  code: null,
  killed: false,
  signal: 'SIGPIPE',
  cmd: 'bash test.sh'
}
```
