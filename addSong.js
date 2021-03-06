const addSong = async (datos, pool) => {
  const query = {
    text: "INSERT INTO repertorio (cancion, artista, tono) VALUES ($1, $2, $3)",
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

module.exports = addSong;
