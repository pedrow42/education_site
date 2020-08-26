const express = require('express')
const server = express()
server.use(express.static("public"))
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/site.html")
})
.get("/study", (req, res) => {
    return res.send("Página study")
})
.listen(5550)