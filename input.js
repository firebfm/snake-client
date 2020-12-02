/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let connection;

 // callback
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exit! Bye!');
    process.exit();
  }
  if (key === 'w') {
    console.log('Move: up');
  } else if (key === 'a') {
    console.log('Move: left');
  } else if (key === 's') {
    console.log('Move: down');
  } else if (key === 'd') {
    console.log('Move: right');
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key)
  });
  return stdin;
};

module.exports = { setupInput };