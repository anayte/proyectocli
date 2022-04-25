const express = require("express");
const router = express.Router();
//const { MongoClient } = require("mongodb");

router.post('/seguimiento', async (req, res) => 
{
    res.redirect('seguimiento');
    console.log('Ingreso a sitio');
});

module.exports = router;