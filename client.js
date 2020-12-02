const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', (client) => {
    console.log("From client: Successfully connected to game server");
    conn.write("Name: SH");
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 100);
  });

  conn.on('data', (data) => {
    //data show from server client.write
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = { connect };