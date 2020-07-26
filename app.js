const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader(
        'Content-Type', 'text/plain'
    );
    if(req.method === 'GET' && req.url === '/'){
        res.write('Hello World, Welcome to WeJapa Internship');
        res.end();
    }
    else if(req.method === 'POST' && req.url === '/name'){
        res.setHeader('Content-Type', 'application/json');

        req.on("end", () => {
            res.write(`Hello , Welcome to WeJapa Internships`);
            res.end();
        });
    }
    else{
        res.write("The page you're looking for doesn't exist");
        res.end();
    }
});

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World, Welcome to WeJapa Internship');
// });

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
});