const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000
const path = require('path')

//Make public file static
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (__, res) => {
  res.render('index.html')
})

io.on('connection', (socket) =>{
  console.log('A user connected')

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })

  //disconnect event
  socket.on('disconnect', () => {
    console.log(`user disconnected`)
  })

  

})


//Listening on PORT
http.listen(PORT, () => console.log(`Server running port on ${PORT}`))