module.exports = {
    "development": {
        "username": "root",
        "password": "Chicago13",
        "database": "property_manager",
        "host": "127.0.0.1",
        "port": "3306",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "database_test",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": process.env.JAWSDB_URL,
        "dialect": "mysql"
    }
}