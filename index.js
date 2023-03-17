const express = require('express');
const cors = require('cors')
const app = express();

const fs = require('fs');
const {v4: uuid} = require('uuid');

app.use(express.static('/public'));
app.use(express.json())
app.use(cors({origin: 3000}))

//read json and parse it
const savedSongs = fs.readFileSync('./data/songs.json')
const parsedSavedSongs = JSON.parse(savedSongs);

app.get('/saved', (req, res) => {
    console.log('At saved get request')
    res.send(parsedSavedSongs)
})

app.post('/saved', (req, res) => {
    const {songName, yourName} = req.body;
    const savedObj = {
        id: uuid(),
        songName,
        yourName,
        timestamp: new Date().toLocaleDateString(),
        songFile: []
    }
    parsedSavedSongs.push(savedObj)
    fs.writeFileSync('./data/songs.json', JSON.stringify(parsedSavedSongs))
    res.send(savedObj);
})

app.listen(8080, () => {
    console.log('Listening on 8080')
})