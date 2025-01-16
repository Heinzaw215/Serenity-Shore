import express from "express";

const mysql = require('mysql');
const { MongoClient } = require('mongodb')

const app = express();
const port = process.env.PORT || 3000;

// MySql Connection
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'your_mysql_database'
})

mysqlConnection.connect(err => {
  if (err) {
    console.error('MySQL connection error.')
  } else {
    console.log('connected to MYSQL.')
  }
})

// MongoBD connection
const mongoUrl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

mongoClient.connect(err => {
  if (err) {
    console.error('MongoDB connection error.')
  } else {
    console.log('Connected to mongoDB.')
  }
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// localhost:3000

app.get('/', (request, response) => {
  response.status(201).send({msg: "Hello!"})
})

// localhost:3000/users
app.get('/api/users', (request, response) => {
  response.status(201).send([
    { ID: 1, username: "anson", displayName: "Anson" },
    { ID: 2, username: "kyaw+kyaw", displayName: "Kyaw Kyaw Kyaw" },
    { ID: 3, username: "adam", displayName: "Adam" },
  ]);
})

// localhost:3000/products
app.get('/api/products', (req, res) => {
  res.status(201).send([
    
  ])
})