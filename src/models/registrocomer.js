const  mongoose =require('mongoose');
const {Schema}  = mongoose;
const bcrypt  = require('bcryptjs');

//mongoose.connect('mongodb://localhost/test');

mongoose.model('registro',new Schema ({
    nombrecomer: { type: String, required: true},
    departamento:{type: String, required: true},
    municipio : {type: String, required: true},
    fecharegistro: { type: Date, default: Date.now}
}))


module.exports = mongoose.model('registro');
