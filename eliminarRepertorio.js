const eliminarRepertorio = async (dato) => {
    const consulta = {
        text: 'DELETE from repertorio where id=$1',
        values: dato,
        name:'eliminar-repertorio'
    }
    console.log(consulta)
    try {
        const result = await pool.query(consulta)
        return result
    } catch (error) {
        console.log(error.code)
        console.log(error)
    }
}

module.exports = eliminarRepertorio

/*
if(req.url.startsWith('/cancion') && req.method == 'DELETE'){
    const { id } = url.parse(req.url, true).query;
    const registros = await eliminarRepertorio(id)
    res.end(JSON.stringify(registros))
}*/