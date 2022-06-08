require('dotenv').config()

const PORT = process.env.PORT

const MYSQL_DB = {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}

module.exports = {
  MYSQL_DB,
  PORT
}