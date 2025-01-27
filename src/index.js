
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash  = require('connect-flash');
const passport = require ('passport');
// Initializations
const app = express();
//require ('./database');
//require('./config/passport');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Global Variables

app.use((req, res, next) => {
   res.locals.error = req.flash('error');
   res.locals.user  = req.user;
   res.locals.twits = req.twits;
   res.locals.varsession = req.session.Usuario;
   next(); 
});
// Routes
//app.use(require('./routes/index'));
//app.use(require('./routes/notes'));
//app.use(require('./routes/users'));
app.use(require('./routes/registrar'));
app.use(require('./routes/publicar'));
app.use(require('./routes/index'));
app.use(require('./routes/login'));
app.use(require('./routes/menu'));
app.use(require('./routes/quejar'));
app.use(require('./routes/quejas'));
app.use(require('./routes/seguimiento'));
app.use(require('./routes/verempleados'));

// Static Files

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res){
    res.status(404).redirect("/signin");
});

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
