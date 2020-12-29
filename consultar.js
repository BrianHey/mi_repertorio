const {
    Pool
} = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgre",
    port: 5432,
    database: "repertorio"
})

const consultar = async () => {
    const consulta = "SELECT * FROM repertorio"
    try {
        const res = await pool.query(consulta)
        return res.rows
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    consultar
}

if (req.url == "/canciones" && req.method == "GET") {
    const registros = await consultar()
    res.end(JSON.stringify(registros))
}