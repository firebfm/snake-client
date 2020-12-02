const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    const handleUserInput = function() {
      // ctrl-c exit
      if (key === '\u0003') {
        process.exit();
      }
    };
  });
  return stdin;
};