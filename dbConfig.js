//conexion a la bd sql server, cambiar los datos del user, pass y server para la comunicacion

const config = {
    user: 'gus',
    password: '123456',
    server: 'DESKTOP-M4CABEP', 
    database: 'operaciones',
    options: {
        trustedConnection: true,
        encrypt: false, 
        instanceName: 'SQLEXPRESS',
        enableArithAbort: false             
    } 
}

module.exports = config;