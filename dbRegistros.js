var config = require('./dbConfig');
const sql = require('mssql');

async function getRegistros() {
    try {
        let pool = await sql.connect(config);
        let registros = await pool.request().query('select * from registro');
        return registros.recordsets;
    }
    catch (err) {
        console.log(err.message);
    }
}

async function getRegistro(id) {
    try {
        let pool = await sql.connect(config);
        let registros = await pool.request()
            .input('id', sql.Int, id)
            .query('select * from registro where id = @id');
        return registros.recordsets;
    }
    catch (err) {
        console.log(err.message);
    }
}

async function postRegistros(reg) {
    try {
        let pool = await sql.connect(config);
        let registros = await pool.request()
            .input('concepto', sql.VarChar, reg.concepto)
            .input('monto', sql.Int, reg.monto)
            .input('fecha', sql.Date, reg.fecha)
            .input('tipo', sql.VarChar, reg.tipo)
            .query('INSERT INTO registro (concepto,monto,fecha,tipo) VALUES (@concepto,@monto,@fecha,@tipo)');
        return registros.recordsets;
    }
    catch (err) {
        console.log(err.message);
    }
}

async function putRegistro(reg, id) {
    try {
        let pool = await sql.connect(config);
        let registros = await pool.request()
            .input('id', sql.Int, id)
            .input('concepto', sql.VarChar, reg.concepto)
            .input('monto', sql.Int, reg.monto)
            .input('fecha', sql.Date, reg.fecha)
            .input('tipo', sql.VarChar, reg.tipo)
            .query('UPDATE registro SET concepto = @concepto, monto = @monto, fecha = @fecha, tipo = @tipo WHERE id = @id;');
        return registros.recordsets;
    }
    catch (err) {
        console.log(err.message);
    }
}

async function deleteRegistro(id) {
    try {
        let pool = await sql.connect(config);
        let registros = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM registro WHERE id = @id;');
        return registros.recordsets;
    }
    catch (err) {
        console.log(err.message);
    }
}



module.exports = {
    getRegistros: getRegistros,
    getRegistro: getRegistro,
    postRegistros: postRegistros,
    putRegistro: putRegistro,
    deleteRegistro: deleteRegistro
}