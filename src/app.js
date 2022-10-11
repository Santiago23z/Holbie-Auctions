const express = require('express')
const app = express();

app.use(express.static('public'))
app.get('/home', (req, res) => {
    res.sendFile(__dirname, 'public/HomePage.html')
})

app.listen(8000, () => {
    console.log('Escuchando el puerto 3000');
})