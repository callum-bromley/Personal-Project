import server from './server.ts'

const port = Number(process.env.PORT) || 3000

server.listen(port, '0.0.0.0', function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
