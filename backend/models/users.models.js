const mongoose = require('mongoose');
 
// Creamos un nuevo esquema usando new mongoose.Schema()
const usuarioSchema = new mongoose.Schema({
  // Definimos las propiedades del documento y sus tipos
  nombre: {
    type: String,         
    required: true,       
    trim: true           
  },
  email: {
    type: String,
    required: true,
    unique: true,        
    lowercase: true,     
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    //index:true
  },
  password:{
     type: String,
    required: true,
    min: 4,
  },
  edad: {
    type: Number,
    min: 18,              
    max: 120              
  },
  activo: {
    type: Boolean,
    default: true        
  },
  roles: {
    type: [String],     
    enum: ['usuario', 'editor', 'admin'], 
    default: ['usuario']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now   
  }
  // Podemos anidar objetos (documentos) dentro de un esquema
  // direccion: {
  //   calle: String,
  //   ciudad: String,
  //   codigoPostal: String
  // }
}, {
  timestamps: true // Esto añadirá automáticamente campos 'createdAt' y 'updatedAt'
                   // a cada documento, muy útil para auditoría.
});
 
//------
// UserSchema.index({ email: 1 }); // índice para búsquedas por email

// UserSchema.methods.sayHi = function() {
//   return `Hi, soy ${this.name}`;
// };

// UserSchema.statics.findByEmail = function(email) {
//   return this.findOne({ email });
// };

// UserSchema.pre('save', function(next) {
//   if (this.name) this.name = this.name.trim();
//   next();
// });

const User = mongoose.model('User', usuarioSchema);
module.exports = User;

//4 - Indice
// const clienteSchema = new mongoose.Schema({
//   dni: {
//     type: String,
//     unique: true,
//     index: true
//   }
// });

// index: true: crea un índice para mejorar búsquedas.
// unique: true: asegura que no se repitan valores (no es validación, es restricción de base de datos).