const express = require('express')
const host = 'http//localhost"
const port = 8080

const app = express()

app.get("/", (req, res) => {
	res.send('Hello NodeJs')
})

app.listen(port, host, () => {
	console.log(`Listen ${port})
}
