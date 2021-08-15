const setupInput = function(conn) { 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handeleUserInput(conn)
  return stdin;
}

const handeleUserInput = function(conn){
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if ( key === 'w') {
      conn.write('Move: up');
    } else if (key === 's') {
      conn.write('Move: down'); 
    } else if (key === 'a') {
      conn.write('Move: left'); 
    } else if (key === 'd') {
      conn.write('Move: right'); 
    }
  })
}

module.exports = {setupInput};