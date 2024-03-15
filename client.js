const net = require('net');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
const client = net.createConnection({ port: 3000, host: 'localhost' }, () => {
    console.log('Connected to server');
    readline.on('line', (input) => {
        client.write(`Hey there ${input}!`);   
      });
      client.on('data', (data) => {
        console.log(`Received data from server: ${data}`);
        
        
      });
    
  });