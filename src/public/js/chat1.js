const objDiv = document.getElementById("messageBody");
objDiv.scrollTop = objDiv.scrollHeight;


let socket = io()

let form = document.getElementById('messageForm')
let input = document.getElementById('messageInput')
let message = document.getElementById('messageInput').value
let myMessage = document.getElementById('myMessage')



form.addEventListener('submit', function (e) {
  e.preventDefault()

  console.log(input.value)
  if (input.value) {
    socket.emit('chat message', input.value)
    input.value = ''
  }

})

socket.on('chat message', function (msg) {
  // let item = document.createElement('li')
  // item.textContent = msg
  myMessage.innerHTML = msg
  window.scrollTo(0, document.body.scrollHeight)
})
