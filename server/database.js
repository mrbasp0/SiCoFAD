const mongoose = require('mongoose');

const URI = 
'mongodb+srv://admin:admin@cluster0.h9ndy.mongodb.net/SiCoFAD?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('db is conected'))
    .catch(err => console.err(err))
    ;


module.exports = mongoose;