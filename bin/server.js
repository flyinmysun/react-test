const config = require('../config')
const server = require('../server/main')
const debug = require('debug')('app:bin:server')
const port = config.server_port

server.listen("3001")
debug(`Server is now running at http://localhost:${port}.`)
