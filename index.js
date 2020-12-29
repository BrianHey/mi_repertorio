const url = require("url");
const http = require("http");
const fs = require("fs");

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
    if (req.url.startsWith("/cancion") && req.method == "DELETE") {
      const { id } = url.parse(req.url, true).query;
      const registros = await eliminarRepertorio(id, pool);
      res.end(JSON.stringify(registros));
    }
  })
  .listen(3000);
