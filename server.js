const express = require('express');
const app = express();
const port = 3000;

app.use('/pb', express.static('public'));



const budgetBackEnd = require('./budget.json');



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budgetBackEnd);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:$(port)');
});