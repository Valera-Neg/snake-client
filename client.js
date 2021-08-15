const net = require('net');

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

module.exports.connect = connect;