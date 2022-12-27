const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req,res) => {
    const num = Math.floor(Math.random() * 10) + 1
    const myName = 'Adam'
    res.render('random', {
        num,
        myName
    })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', {
        subreddit
    })
})

app.get('/cats', (req,res) => {
    const cats = ['piper', 'piepur', 'pipurr', 'piipure']
    res.render('cats', {cats})
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})