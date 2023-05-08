const http = require('http');

http
    .createServer((req, res) => {
        const url = req.url;
        console.log(url)
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write("HELO WORLD")
        res.end()
    })
    .listen(3000, () => {
        console.log('server is listening on port 3000')
    })