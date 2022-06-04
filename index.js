require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env

const {seed, getCourses, createCourse, deleteCourse, createList} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.get('/api/courses', getCourses)

app.put('/api/newCourse', createCourse)
app.delete('/api/courses/:id', deleteCourse)

app.listen(SERVER_PORT, () => console.log(`Teeing off on ${SERVER_PORT}`))