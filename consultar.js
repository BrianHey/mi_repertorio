const consultar = async (pool) => {
  const consulta = "SELECT * FROM repertorio";
  try {
    const res = await pool.query(consulta);
    return res.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  consultar,
};
