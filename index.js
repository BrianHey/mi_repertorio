const url = require("url");
const http = require("http");
const fs = require("fs");
const {
    consultar
} = require("./consultar")


http.createServer(async (req, res) => {
    const {
        id
    } = url.parse(req.url, true).query;

    if (req.url == "/" && req.method == "GET") {
        res.setHeader("content-type", "text/html")
        const html = fs.readFileSync("index.html", "utf8")
        res.end(html)
    }
    if (req.url == "/canciones" && req.method == "GET") {
        const registros = await consultar()
        res.end(JSON.stringify(registros))
    }

}).listen(3000);