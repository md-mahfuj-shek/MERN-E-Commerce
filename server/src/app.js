const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const createError = require('http-errors')
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

const isLoggedIn = (req,res,next) => {
    const login = true;
    if (login) {
        req.body.id = 101;
        next();
    } else {
        return res.status(401).json({ message: 'Please Login First'});
    }
};
    

app.get('/test', (req, res) => {
    res.status(200).send({
    message:'Api is working fine',
    });
});

app.get('/api/user', (req, res) => {
    console.log(req.body.id);
    res.status(200).send({
    message:'User profile is returned',
    });
});

app.use((req,res,next)=>{
    next(createError(404, 'route not found'));
});

app.use((err, req, res, next) => {
   return res.status(err.status || 500).json({
    success : false,
    message: err.message,
   });
  });


module.exports = app;