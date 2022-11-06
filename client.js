const net = require('net');
const fs = require('fs');

const conn = net.createConnection({
  host: 'localhost',
  port: 3000,
});

conn.setEncoding('utf8');

conn.on('data', (data) => {
  console.log(data);
  // fs.writeFile('index.html', data, err => {
  //   if (err) {
  //     console.error(err);
  //   }
  // });
});

conn.on("connect", () => {
  conn.write("index.txt");
});