
const editar = async (datos) => {
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