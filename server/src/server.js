const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))
    
app.get('/test', (req, res) => {
    res.status(200).send({
    message:'Api is working fine',
    });
});

app.post('/test', (req, res) => {
    res.status(200).send({
    message:'Post: Api Testing is working fine',
    });
});
    
app.put('/test', (req, res) => {
    res.status(200).send({
    message:'Put: Api Testing is working fine',
    });
});

app.delete('/test', (req, res) => {
    res.status(200).send({
    message:'delete: Api Testing is working fine',
    });
});



app.listen(3001, () => {
    console.log(`server is running at http://localhost:3001`);
});
