const express = require('express')
const app = express()
const { appendFile } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const usersController = require('./controllers/users')

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

app
.use('/', express.static(__dirname + '/public/'))
.get("/api", (req, res) => {
    res.send("You are on the home page!")
})
.use('/api/users', usersController);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('Example app listioning at at http://localhost:${port}/');
});