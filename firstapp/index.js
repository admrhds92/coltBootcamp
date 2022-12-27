const { application } = require("express");
const express = require("express");
const app = express();

// app.use((req,res) => {
//     console.log("We got a request")
//     res.send("We are sending the response")
// })

app.get('/cats', (req,res) => {
    console.log("CAT REQUEST")
    res.send("MEOW!")
})

app.post('/cats', (req,res) => {
    res.send("THIS IS A RESPONSE TO A POST REQUEST")
})

app.get('/dogs', (req,res) => {
    console.log("DOG REQUEST")
    res.send("WOOF!")
})

app.get('/', (req,res) => {
    console.log("HOME REQUEST")
    res.send("This is the homepage")
})

app.get('*', (req,res) => {
    res.send(`I dont know that path`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})