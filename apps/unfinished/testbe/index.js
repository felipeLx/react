const express = require('express');
const router = require('express').Router();
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = mysql.createPool({
    host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
    user: 'MYSQL_USER', // database user MYSQL_USER: MYSQL_USER
    password: 'MYSQL_PASSWORD', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: 'books' // database name MYSQL_HOST_IP: mysql_db
  })

router.route('/').get(async(req, res) => {
    await res.render('index')
        .then(res => res.json())
})

router.route('/api/:search').get(async(req, res) => {
    console.log(req)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`);
})
