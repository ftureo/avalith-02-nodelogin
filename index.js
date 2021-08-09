//Require file dotenv for sensible information
require('dotenv').config()

//Require module express and save in a variable
const express = require('express')
//Create my app
const app = express()
//Listen to the working port (4000)
const PORT = 4000
app.listen(PORT, ()=> {
    console.log(`¡App listening on port ${PORT}!`)
})

//Require module JWT and save in a variable
//The module JWT offers a token for authorization through encryption
const jwt = require('jsonwebtoken')

//Require module bcrypt and save in a variable
//The module bcrypt can hashing password. Take the token and hash that information
const bcrypt = require('bcryptjs')




// The middleware «app.use(express.json())» will translate API requests
app.use(express.json());


// ----- Test Endpoint ----- // 
app.get('/api/test', (req, res) => {
    res.send({message: 'Llegando', token: 'Soy un token'})
})

// ----- Endpoint #1 ----- //
// Login with authorization

//For a unique user hard-coded
const user = {
    username: 'admin',
    password: bcrypt.hashSync('123456', 10)
}

app.post('/api/login', async(req, res) => {
    const token = jwt.sign(user, process.env.SECRET_KEY)
    try{       
        (await bcrypt.compare(req.body.password, user.password) && req.body.username === user.username) 
        ? res.send({
            message: 'User Logged Successfully ¡Welcome!',
            token: token
        })
        : res.send({
            message: 'username or password is incorrect. Please, try again'
        })
    }
    catch{
        (!req.body.user || !req.body.password)
        ? res.send({
            message: "Username and password are required fields"
        })
        : res.sendStatus(500)
    }
})

// ----- Endpoint #2 ----- //
// Sign In
const authorization = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        (err) && res.sendStatus(403)
        req.user = user
        next()
    })
}

app.get('/api/signin', authorization, (req, res) => {
    res.send(`Buenos días ${req.user.username}!`)
})