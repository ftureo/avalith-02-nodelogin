//Require module express and save in a variable
const express = require('express')
//Create my app
const app = express()
//Listen to the working port (4000)
const PORT = 4000
app.listen(PORT, ()=> {
    console.log(`¡App listening on port ${PORT}!`)
})

// The middleware «app.use(express.json())» will translate API requests
app.use(express.json());

//  ----- Endpoint #1 ----- //
//Define date
const todayIs = new Date().toLocaleDateString()
const timeIs = new Date().toLocaleTimeString()

app.get('/api/today', (req, res) => {
    res.send(`You have requested the date at this time: ${todayIs}, ${timeIs}`)
})

//  ----- Endpoint #2 ----- //
//Require module fs
const fs = require('fs')

//Call the method fs of read file. Use readFile for asynchronous process
app.get('/api/reading', (req, res) => {
    fs.readFile('text.txt', 'utf-8', (err, data)=> {
        //If error exists
        (err) && res.send(`This is the error: ${err}`)
        //Response
        res.send(`The response is: ${data}`)
        console.log(data)
    })
})

//  ----- Endpoint #3 ----- //
// If don't use app.use(express.json()), will not work
// Testing with Postman sending JSON in body

app.post('/api/greeting', (req,res) => {
    (req.body === undefined) ?
    res.send('This is undefined or an error has been ocurred') :
    res.send(`Buenos dias ${req.body.name}!`)
})