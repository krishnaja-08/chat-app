const net = require('net');
let sockets=[]
const server = net.createServer((socket) => {
  sockets.push(socket)
  const index=sockets.indexOf(socket)
    
  console.log(`Client ${index} is connected`);

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);

    for (let i = 0; i < sockets.length; i++) {
      if(socket!=sockets[i]){
        sockets[i].write(data);
     
      }
      
  }
    
  });

  
  socket.on('end', () => {
    sockets = sockets.filter(item => item != socket);
    console.log('Client disconnected');
  });
});
const port = 3000;


server.listen(port, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});