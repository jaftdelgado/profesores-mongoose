const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// URL de conexión a MongoDB (base de datos estudiantes)
const mongoDBURI = 'mongodb://localhost:27017/estudiantesDB';

// Conexión a MongoDB
mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));


app.use('/api/estudiantes', require('./routes/estudiantes'));


app.listen(3033, () => {
    console.log('Servidor ejecutándose en http://localhost:3033');
});
