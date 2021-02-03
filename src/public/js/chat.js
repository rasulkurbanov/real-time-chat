let socket = io()

let messageFormInput = document.getElementById('message_form_input')
let messageForm = document.getElementById('message_form')
let locationBtn = document.getElementById("shareLocationBtn")
let messageFormBtn = document.getElementById('message_form__button')

messageForm.addEventListener('submit', (e) => {
  e.preventDefault()

  messageFormBtn.setAttribute('disabled', 'disabled')

  let message = messageFormInput.value

  socket.emit('new message', message)
  messageFormBtn.removeAttribute('disabled')
  messageFormInput.value = ''
  messageFormInput.focus()

})


// locationBtn.addEventListener('click', () => {
//   if(!navigator.geolocation) {
//     alert('Geolocation is not supported by your browser')
//   }

//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position)
//   })

// })
