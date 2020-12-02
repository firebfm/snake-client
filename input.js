/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 // handleUserInput callback
// const handleUserInput = function(key) {
//   if (key === '\u0003') {
//     console.log('Exit! Bye!');
//     process.exit();
//   }
// }

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

module.exports = { setupInput };