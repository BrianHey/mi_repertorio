if (req.url == "/cancion" && req.method == "POST") {
  let body = "";
  req.on("data", (datos) => {
    body += datos;
  });
  req.on("end", async () => {
    const datos = Object.values(JSON.parse(body));
    const res = await addSong(datos);
    res.end(JSON.stringify(res));
  });
}
