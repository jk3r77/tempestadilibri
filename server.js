import express from 'express'
const app = express()

app.set('view engine', 'pug')

// Static Files
app.use(express.static('public/css'))
app.use(express.static('public/js'))
app.use(express.static('public/img/favicon'))
app.use(express.static('public/img/fondo'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/signup', (req, res) => {
  res.render('index')
})

app.listen(3000, (err) => {
  if (err) {
    return console.log('Error'), process.exit(1)
  }
  console.log('tempesta start')
})
