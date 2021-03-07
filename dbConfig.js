//conexion a la bd sql server

const config = {
    user: 'gus',
    password: '123456',
    server: 'DESKTOP-M4CABEP', 
    database: 'operaciones',
    options: {
        trustedConnection: true,
        encrypt: false, 
        instanceName: 'SQLEXPRESS',
        enableArithAbort:true              
    } 
}

module.exports = config;