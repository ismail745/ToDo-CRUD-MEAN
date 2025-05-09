const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MEAN-Todo-App').then(() => {
  console.log('✅ MongoDB connecté');
}).catch(err => {
    console.error('❌ Erreur MongoDB', err);
});

module.exports = { mongoose }; 