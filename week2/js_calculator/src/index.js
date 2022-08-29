const http = require('http');
const qs = require('querystring');
const calculator = require('./calculator');

const server = http.createServer(function(request, response) {
  console.dir(request.param);


  if (request.method === 'POST') {
    console.log('POST');
    let body = '';
    request.on('data', function(data) {
      body += data;
    });

    request.on('end', function() {
      const post = qs.parse(body);
      const numbers = post.numbers;
      const action = post.action;
      let result;
      if (action === 'add') {
        result = calculator.add(numbers);
      } else if (action === 'subtract') {
        result = calculator.subtract(numbers);
      } else if (action === 'multiply') {
        result = calculator.multiply(numbers);
      }
      response.writeHead(200, {
        'Content-Type': 'text/html',
      });
      response.end('Result: ' + result);
    });
  } else {
    const html = `
           <html>
               <body>
                   <form method="post" action="http://localhost:3000">Numbers:
                       <input type="text" name="numbers" />
                       <input type="submit" name="action" value="add" />
                       <input type="submit" name="action" value="subtract" />
                       <input type="submit" name="action" value="multiply" />
                   </form>
               </body>
           </html>`;
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(html);
  }
});

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);
