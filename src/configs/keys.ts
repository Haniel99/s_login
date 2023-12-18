export default {
    database: {
        username: process.env.USER_DB??'',
        password: process.env.PASSWORD_DB??'',
        database: process.env.NAME_DB??'',
        host: process.env.HOST_DB??'' 
    },
    debug: true,
    
}
