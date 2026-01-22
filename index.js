const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 3000 // ngrok http 3000
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.get("/", (req, res) => {
    res.send("Serveur en ligne !");
});

app.post("/hook", (req, res) => {
    console.log(req.body)
    res.status(200).json("Message reçu").end()
})
