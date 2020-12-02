const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', (client) => {
    console.log("From client: Successfully connected to game server");
    conn.write("Name: SYH");
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50);
  });

  conn.on('data', (data) => {
    //data show from server client.write
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = { connect };