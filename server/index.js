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
app.use(cors({origin: 'http://localhost:4200'}));
//esto es para que se conecte con el frontend (pues Angular usa el puerto 4200)

// Routes
app.use('/curso',require('./routes/curso.routes'));
app.use('/director',require('./routes/director.routes'));
app.use('/docente',require('./routes/docente.routes'));
app.use('/secretari@',require('./routes/secretaria.routes'));
app.use('/usuario',require('./routes/usuario.routes'));
app.use('/formato/1',require('./routes/formato_1.routes'));
app.use('/formato/2',require('./routes/formato_2.routes'));
app.use('/formato/5',require('./routes/formato_5.routes'));

//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server en puerto', app.get('port'));
});