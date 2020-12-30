const addSong = async (datos) => {
  const query = {
    text: "INSERT INTO repertorio VALUES ($1, $2, $3)",
    values: datos,
  };
  try {
    const result = await pool.query(query);
    return result;
  } catch (e) {
    console.log(e.code);
    return e;
  }
};

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

module.exports = addSong;
