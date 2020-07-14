import server from "./server"

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready on ${process.env.NODE_ENV} mode`)
})
