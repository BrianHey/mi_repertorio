const eliminarRepertorio = async (dato, pool) => {
    const consulta = {
        text: 'DELETE from repertorio where id=$1',
        values: [dato],
        name:'eliminar-repertorio'
    }
    try {
        const result = await pool.query(consulta)
        return result
    } catch (error) {
        console.log(error.code)
        console.log(error)
    }
}

module.exports = eliminarRepertorio

