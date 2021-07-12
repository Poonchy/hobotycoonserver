const express = require('express')
const server = express()
require('dotenv').config()

const { Client } = require('pg');
console.log(process.env.DATABSE_URL)
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

server.post("/users", (req, res)=>{
    user = req.body
    client.connect();
    query = `INSERT INTO Users ${{user}};`
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

server.get("/users:id", (req, res)=>{
    id = req.params.id
    client.connect();
    query = `SELECT * FROM Users WHERE ${{id}};`
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

server.put("/users:id", (req, res)=>{
    id = req.params.id
    user = req.body
    client.connect();
    query = `UPDATE Users SET ${{user}} WHERE ${{id}};`
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

server.use("*",(_,res)=>{
    res,status(404).json({"message":"No endpoint found."})
})

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log(`Listening on port 5000`)
})