const http = require("http");

const server = http.createServer((req, res) => {
    
    if (req.url == "/") {
        res.end("Hello welcome to my server with custom port.");
    } else if (req.url == "/about") {
        res.end("This is the About page");
    } else if (req.url == "/contact") {
        res.end("This is the Contact Page");
    } else {
        res.end("Not found");
    }

});


server.listen(8000, () => {
    console.log("Server started")
});