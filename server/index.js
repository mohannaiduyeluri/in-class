const express = require('express');

const usersController = require('./controllers/users');

const app = express()
const port = process.env.PORT || 3000
console.log(process.env);

// app.get('*', (req, res, next) => {
//     req.
//     console.log("Request Received");
//     next();
// }).get("/", (req, res) => {
//     res.send("You are on the home page!");
// }).get("/about", (req, res) => {
//     res.send("You are on the about page!", req.date);
// }).get("/contact", (req, res) => {
//     res.send({
//         email: 'mohan@mail.com',
//         phone:'696-785-7845',
//         instegram:"mohansandeepyeluri",
//         twitter: '@mohan'
//     });
// });

// app
// .use('/', express.static(__dirname + '/public/'))
// .get("/api", (req, res) => {
//     res.send("You are on the home page!")
// })
// .use('/api/users', usersController);

app
    
    .use('/', express.static(__dirname + '/public/'))

    .use(express.json())

    .get('/api/', (req, res) => {
        res.send('You are on the homepage');
    })

    .use('/api/users', usersController)

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

server.listen(port, hostname, () => {
    console.log('Example app listioning at at http://localhost:${port}/');
});