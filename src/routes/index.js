const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.redirect('/signin');
});

router.get('/about', (req, res) =>{
    res.send('About');
})

router.get('/', (req, res) => {
    res.render('partials/login');
});

router.get('/login', (req, res) => {
    res.render('partials/login');
});

router.get('/menu', (req, res) => {
    res.render('partials/menu');
});

router.get('/seguimiento', (req, res) => {
    res.render('partials/seguimiento');
});

router.get('/quejar', (req, res) => {
    res.render('partials/quejar');
});

router.get('/quejas', (req, res) => {
    res.render('partials/quejas');
});

router.get('/verempleados', (req, res) => {
    res.render('partials/veremepleados');
});

module.exports = router;