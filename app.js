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


// '/' -> default route
app.get('/', (req, res) => {
    res.send('Hello')
}) 

app.get('/name', (req, res)=>{
    res.send('My name is Swati Goel')
})

// in browser to get any data, we need to define a port
app.listen(8000, ()=>{
    console.log('Port 8000')
})
