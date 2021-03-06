const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000
const path = require('path')

//Setting activeUsers Set
const activeUsers = new Set()

//Make public file static
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


app.get('/', (__, res) => {
  res.render('chat.html')
})

io.on('connection', (socket) =>{
  console.log('User connected')
  
  socket.on('new message', (msg) => {
    console.log(msg)
  })


  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})


//Listening on PORT
http.listen(PORT, () => console.log(`Server running port on ${PORT}`))