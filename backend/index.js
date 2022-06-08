const config = require('./utils/config')
const server = require('./server')
const http = require('http')

const node = http.createServer(server)

node.listen(config.PORT, () => {
  console.log(`Node server running on port ${config.PORT}`)
})