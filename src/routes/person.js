const { Router } = require('express');
const express = require('express');
const router = express.Router();

// get data from query
// example: localhost:3000/person?name=cuong&age=20
router.get('/person', (request, response) =>
{
    const name = request.query.name ? request.query.name : 'unknown';
    const age = request.query.age ? request.query.age : 'unknown';
    response.send(`you request a person data by query of: ${name} and age: ${age}`);
})


// get data from router
// example: localhost:3000/person/cuong
router.get('/person/:name', (request, response) =>
{
    response.send(`you request a person data by params of: ${request.params.name}`);
})


// test 500 error
// example: localhost:3000/error
router.get('/error', (request, response) =>
{
    throw new Error('this is the throwable error');
})




module.exports = router