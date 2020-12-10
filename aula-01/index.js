const express = require('express')
const app = express()
app.use(express.json());
const todos = [{name: 'Estudar javascript', desc: 'teste'}]  
app.get('/', function (req, res) {
  res.json(todos)
})
app.post('/', function (req, res) {
    console.log(req)
    todos.push(req.body)
    res.json(todos)
})
app.put('/', function (req, res) {
res.send('Hello put')
})
app.delete('/', function (req, res) {
res.send('Hello delete')
})
 
app.listen(3000)