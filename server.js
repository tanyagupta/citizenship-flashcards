const express = require('express')
const app = express()

app.use('/static', express.static('static'))

app.get('/', function (req, res) {
  var options = {root: __dirname + '/templates'}
  res.sendFile('civics_flash_card.html', options)
})


app.listen(8080, () => console.log('Example app listening on port 8080!'))
