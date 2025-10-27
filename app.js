const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// const mongoDBURI = 'mongodb://usuario:pass@localhost:27017/estudiantesDB';
const mongoDBURI = 'mongodb://localhost:27017/estudiantesDB';

mongoose.connect(mongoDBURI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api/estudiantes', require('./routes/estudiantes'));
app.use('/api/profesores', require('./routes/profesores'));


app.use((req, res) => {
    res.status(404).json({ msg: 'Ruta no encontrada' });
});

const PORT = 3033;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
