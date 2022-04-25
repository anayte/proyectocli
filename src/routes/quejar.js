const express = require("express");
const router = express.Router();
//const { MongoClient } = require("mongodb");

router.post('/quejar', async (req, res) => 
{
    res.redirect('quejar');
    console.log('Ingreso a sitio');
});

module.exports = router;