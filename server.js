const express = require('express')
const server = express()
require('dotenv').config()

const { Client } = require('pg');
function createServer() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    });
    return client
}

server.use(express.json());
server.post("/users", (req, res)=>{
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    user = req.body
    client = createServer()
    client.connect();
    query = `INSERT INTO Users (username, password, lastupdated) VALUES ('${user.username}', '${user.password}', '${secondsSinceEpoch}');`
    client.query(query)
    .then((data)=>{
        client.end();
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err)
        client.end();
        res.status(400).json(err)
    })
})

server.get("/users/:id", (req, res)=>{
    id = req.params.id
    client = createServer()
    client.connect();
    query = `SELECT * FROM Users WHERE id = '${id}';`
    client.query(query)
    .then((data)=>{
        client.end();
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err)
        client.end();
        res.status(400).json(err)
    })
})

server.get("/users", (req, res)=>{
    username = req.body.username
    client = createServer()
    client.connect();
    query = `SELECT * FROM Users WHERE username = '${username}';`
    client.query(query)
    .then((data)=>{
        client.end();
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err)
        client.end();
        res.status(400).json(err)
    })
})

server.put("/users/:id", (req, res)=>{
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    id = req.params.id
    user = req.body
    client = createServer()
    client.connect();
    query = `UPDATE Users SET food = '${user.food}', scrap = '${user.scrap}', foodrac = '${user.foodrac}', scraprac = '${user.scraprac}', tech = '${user.tech}', lastupdated = '${secondsSinceEpoch}' WHERE id = '${id}';`
    client.query(query)
    .then((data)=>{
        client.end();
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err)
        client.end();
        res.status(400).json(err)
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log(`Listening on port 5000`)
})