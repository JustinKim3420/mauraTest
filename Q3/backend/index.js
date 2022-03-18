const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 4000

app.use(cors())
app.use(express.json())

app.use('/courses',require('./routes/courses'))

app.listen(PORT, ()=>{
    console.log('Server is listening on port ',PORT)
})