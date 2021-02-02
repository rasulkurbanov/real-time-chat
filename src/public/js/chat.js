let socket = io()

let message = document.getElementById('messages')
let form = document.getElementById('form')
let input = document.getElementById('input')

const name = prompt('What is your name?!')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (input.value) {
    socket.emit('chat message', {message: input.value, name: name})
    input.value = ''
  }

})

socket.on('chat message', function (msg) {
  let item = document.createElement('li')
  item.textContent = msg.message
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})
