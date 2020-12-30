const editar = async (datos, pool) => {
  const consulta = {
    text: `UPDATE repertorio SET cancion = $1, artista = $2, tono = $3 WHERE cancion =$1 RETURNING *`,
    values: datos,
  };
  try {
    const result = await pool.query(consulta);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { editar };

if (req.url == "/cancion" && req.method == "PUT") {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", async () => {
    const datos = Object.values(JSON.parse(body));
    const respuesta = await editar(datos, pool);
    res.end(JSON.stringify(respuesta));
  });
}
