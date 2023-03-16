const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.static('/public'));
app.use(express.json())
app.use(cors({origin: 3000}))


app.get('/', (req, res) => {
    console.log('At root get request')
})

app.listen(8080, () => {
    console.log('Listening on 8080')
})