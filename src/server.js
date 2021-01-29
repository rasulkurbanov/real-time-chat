const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))


app.get('/', (__, res) => {
  res.render('index.html')
})


app.listen(PORT, () => console.log(`Server running port on ${PORT}`))