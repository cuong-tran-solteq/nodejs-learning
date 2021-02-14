const ProductModel = require('../models/product.model')
const express = require('express');
const router = express.Router();

router.post('/product', async (req, res) =>
{
    //req.body 
    if (!req.body)
    {
        return res.status(400).send('Request body is missing');
    }

    let product = new ProductModel(req.body);

    /*
    product.save().then(doc =>
    {
        if (!doc || doc.length === 0)
        {
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    }).catch(err =>
    {
        res.status(500).send('error: ' + err);
    });
    */

    try
    {
        const savedPost = await product.save();
        res.json(savedPost);
    } catch (error)
    {
        res.json({ message: error })
    }
});

// GET
router.get('/product', (req, res) =>
{
    ProductModel.find({
        name: "pijama"
    }).then(doc =>
    {
        return res.json(doc);
    }).catch(err =>
    {
        res.status(500).json(err)
    })
})

module.exports = router;