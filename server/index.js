const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
//app.use(cors({origin: 'http://localhost:4200'}));//esto es para qeu se conecte con el frontend

// Routes
app.use('/curso',require('./routes/curso.routes'));
app.use('/director',require('./routes/director.routes'));

//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});