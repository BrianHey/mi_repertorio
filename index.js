const url = require("url");
const http = require("http");
const fs = require("fs");
const { consultar } = require("./consultar");

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "repertorio",
  port: 5432,
});

const { eliminarRepertorio } = require("./consultas");

http
  .createServer(async (req, res) => {
    const { id } = url.parse(req.url, true).query;

    if (req.url == "/" && req.method == "GET") {
      res.setHeader("content-type", "text/html");
      const html = fs.readFileSync("index.html", "utf8");
      res.end(html);
    }
    if (req.url == "/canciones" && req.method == "GET") {
      const registros = await consultar(pool);
      res.end(JSON.stringify(registros));
    }
    if (req.url.startsWith("/cancion") && req.method == "DELETE") {
      const registros = await eliminarRepertorio(id, pool);
      res.end(JSON.stringify(registros));
    }
  })
  .listen(3000);
