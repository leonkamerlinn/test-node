const express = require('express')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('TEST TEST 222')
})
app.listen(8080, () => console.log('Server is running on port 8080'))
