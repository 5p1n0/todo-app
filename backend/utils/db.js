const config = require('./config')
const mysql = require('mysql2/promise')

const query = async (sql, params) => {
  try {
    console.log('connecting to database')
    const connection = await mysql.createConnection(config.MYSQL_DB)
    
    try {
      console.log('connection successful')
      const [results, ] = await connection.execute(sql, params)
      return results
    } catch {
      console.error('query error:', error)
    }
      
  } catch {
      console.error('connection failed')
  }
}

module.exports = {query}