const express = require('express');
const app = express();

app.use(express.static('/public'));

app.get('/', (req, res) => {
    res.send('http://localhost:8080/images/backgroundBars.avg');
})

app.listen(8080, () => {
    console.log('Listening on 8080')
})