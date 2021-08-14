const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '172.25.92.67',
    port: 50541
  });
  //interpert inconing data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
  console.log('Server says: ', data);
   });

  return conn;

}


console.log('Connecting...');
connect();
