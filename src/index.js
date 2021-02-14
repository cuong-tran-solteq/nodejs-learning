const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// defined router
const personRoute = require('./routes/person');

// CRUD for collection in mongoDB
const productRoute = require('./routes/product');


// using middleware
app.use(bodyParser.json());
app.use((req, res, next) =>
{
    //console.log(` ${req.originalUrl} is call`);
    next();
});

app.use(personRoute);
app.use(productRoute);

app.use(express.static('public'));

// handler for 404
app.use((req, res, next) =>
{
    res.status(400).send('you access the page that is not exist!');
    next();
});

// handler for 500
app.use((err, req, res, next) =>
{
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
    next();
});


const PORT = process.env.PORT || 3000;

try
{
    app.listen(PORT, () => console.log(`Server has start on ${PORT}`));
}
catch ($ex)
{
    console.log($ex)
}