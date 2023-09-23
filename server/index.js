// All Important NPM Packeges
const express = require("express")
const app = express()
const http = require("http")
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })
require("./database/connect")
const cookieParser = require("cookie-parser")
app.use(cookieParser())


// Creating the HTTP Server {Creating This way is better if we need to use soket.io or WebRTC Then no need to Change}
const server = http.createServer(app)

// Express.JSON is for Converting all Collection to JSON DATA

app.use(express.json())

// Main Routing Of our Server

app.use(require("./routes/routes"))

// Creating Our Server

server.listen(5000, () => {
    console.log(`Running On http://localhost:5000`)
})
