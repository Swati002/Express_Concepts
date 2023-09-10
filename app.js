// import express module
const express = require('express')

const app = express()

// http methods - get, post, put, delete


// get
    // get takes 2 parameters, route - is the location from which we are requesting data from
    // And it takes a callback function - this callback function will run and takes a response with it 


// app.get(route, callback)
//  callback function further takes 2 parameters
// app.get(route, callback(req, res))

const name = 'Swati'
const password = 1234

// '/' -> default route
app.get('/', (req, res) => {
    // res.send('<h1>Login to move forward</h1>')
    // to send multiple data
    res.write('<h1>Login to move forward</h1>')
    res.write('<h2>Login to move forward</h2>')
    res.send() // this will end the request
}) 
app.use(loginMiddleware) // using middleware after login
app.get('/profile', (req, res)=>{
    // res.send('Profile Page')
    // now sending response in json format

    res.json([{
                firstName : 'swati',
                lastName : 'goel'
            },
            {
                firstName : 'abc',
                lastName : 'def'
            },
    ])
})

app.get('/feed', (req, res)=>{
    res.send('Feed Page')
})

// in browser to get any data, we need to define a port
app.listen(8000, ()=>{
    console.log('Port 8000')
})


// Middleware in Express.js


//  req -> function -> res
// this function is a middleware, for example [aunthetication] when we login to a site this function checks in its database whether user exists or not and then sends response accordingly

// Express allows us to apply multiple middleware(checks)
// request -> middleware -> middleware -> response


function loginMiddleware(req, res, next){
    // here next() is the method which tell further routes are allowed to visit
    if(name == 'Swati' && password == 1234){
        next()
    }
    else{
        res.send('Cannot Authenticate the user')
    }
}