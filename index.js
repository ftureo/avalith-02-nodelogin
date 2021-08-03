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
// Login with authorization
