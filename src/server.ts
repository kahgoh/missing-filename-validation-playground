import * as consolidate from 'consolidate'
import * as attachments from './controllers/attachments'
import * as express from 'express'

const server: express.Express = express()
const port : number = 3000

server.engine('html', consolidate.handlebars)
server.set('view engine', 'html')
server.set('views', './src/views')

/* Indicate server is up and running. */
server.get('/', attachments.index)
server.post('/attachments', attachments.post)

server.listen(port, () => console.log(`Listening on port ${port}`))