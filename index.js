const express = require('express');
const app = express();

app.use(express.static('/public'));
app.use(express.json())
app.use(cors({origin: 3000}))


app.get('/', (req, res) => {
    res.send('http://localhost:8080/images/backgroundBars.avg');
    console.log('here')
})

app.listen(8080, () => {
    console.log('Listening on 8080')
})