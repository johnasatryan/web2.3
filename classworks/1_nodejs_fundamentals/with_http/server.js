require('dotenv').config({ quiet: true });
const http = require('node:http');
const PORT = process.env.PORT || 3000;

let contacts = [];


function readJSON(rowData) {
  return Promise({})
}
function contactHandler(res, segment, body) {}
const server = http.createServer((req, res) => {
  // console.log(url.protocol);
  // console.log(url.hostname);
  // console.log(url.port);
  // console.log(url.pathname);
  // console.log(url.search);
  // console.log(url.hash);

  const url = new URL(req.url, `http://${req.headers.host}`);
  const segment = url.pathname.split('/').filter(Boolean);

  req.on('data', (data) => {
    if (segment[0] === 'contacts') {
      contactHandler(res, segmen, data);
    }
  });

  // if (segment[0] === 'contacts') {
  //   // 1. GET all contacts
  //   if (req.method === 'GET' && !segment[1]) {
  //     const body = JSON.stringify(contacts);
  //     res.writeHead(200, {
  //       'Content-Type': 'application/json',
  //       'Content-length': Buffer.byteLength(body),
  //     });

  //     res.end(body);
  //   } else if (req.method === 'GET' && segment[1]) {
  //     const id = +segment[1];

  //     contacts.forEach((value) => {
  //       if (value.id === id) {
  //         res.statusCode = 200;
  //         return res.end(JSON.stringify(value));
  //       }
  //     });
  //   }
  //   if (req.method === 'POST') {
  //     let body = '';
  //     req.on('data', (chunk) => {
  //       body += chunk;
  //     });

  //     req.on('end', () => {
  //       if (!body.length) {
  //         res.writeHead(400, 'Error');
  //         return res.end('where is my body????');
  //       }

  //       const contact = { id: contacts.length + 1, ...JSON.parse(body) };
  //       contacts.push(contact);
  //       res.writeHead(201, 'Created');
  //       res.end(
  //         JSON.stringify({ id: contact.id, message: 'Created successfully' }),
  //       );
  //     });
  //   }
  // }

  // // res.end();
});

server.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
