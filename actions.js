const { exec } = require('@actions/exec');

async function test() {
  try {
    await exec('bash test.sh');
    console.log('test.sh completed successfully!');
  } catch (error) {
    console.error('Error occurred during test.sh:', error);
  }
}

test();
