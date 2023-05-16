const { exec } = require('child_process');

function test() {
  exec('bash test.sh', (error, stdout, stderr) => {
    if (error) {
      console.error('Error occurred during test.sh:', error);
    } else {
      console.log('test.sh completed successfully!');
    }
    if (stdout) {
      console.log('test.sh output:', stdout);
    }
    if (stderr) {
      console.error('test.sh error output:', stderr);
    }
  });
}

test();
