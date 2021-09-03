const express = require("express");
var fs = require('fs');
// Initialize Express
let app = express();

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', function(request, response) {
//   console.log('GET /')
//   var html = `
//     <html>
//         <body>
//             <form method="post" action="https://test-server-webhook.herokuapp.com">Name: 
//                 <input type="text" name="name" />
//                 <input type="submit" value="Submit" />
//             </form>
//         </body>
//     </html>`
//   response.writeHead(200, {'Content-Type': 'text/html'})
//   response.end(html)
// })

app.post('/', function(request, response) {
  console.log('POST /');
  console.dir(request.body);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('thanks');
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
