const net = require('net');
const server = net.createServer();
const fs = require('fs');

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('connection', (client) => {
  console.log('New client connected!');

  client.setEncoding('utf8');

  client.on('data', (data) => {

    fs.readFile(data, (err, data) => {
      if (err) {
        client.write(Error);
      }
      client.write(data);
    });

  });

});

