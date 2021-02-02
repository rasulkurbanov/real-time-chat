let socket = io()


let inboxPeople = document.getElementById('inbox__people')
let userName = '';


let form  = document.getElementById('message_form')
let input = document.getElementById('message_form_input')


function newUserConnected(user) {
  userName = user || `User${Math.floor(Math.random() * 1000000)}`
  socket.emit('new user', userName)

  addToUserBox(userName)
}

function addToUserBox(userName) {
  if(!document.querySelector(`.${userName}-userlist`)) {
    return;
  }
  const userBox = `
    <div class="chat_id ${userName}-userlist">
      <h5>${userName}</h5>
    </div>
  `
  inboxPeople.innerHTML += userBox
}

newUserConnected(); 


// form.addEventListener('submit', function (e) {
//   e.preventDefault()

//   if (input.value) {
//     socket.emit('chat message', {message: input})
//     input.value = ''
//   }

// })

socket.on('new user', function (data) {
  data.map((user) => {
    addToUserBox(user)
  })
})
