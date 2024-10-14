const express = require('express');
const router = express.Router();
const{
    getEstudiantes,addEstudiante,updateEstudiante,deleteEstudiante
} = require('../controllers/estudiantes');

router.get('/', getEstudiantes);
router.post('/', addEstudiante);
router.put('/:matricula', updateEstudiante);
router.delete('/:matricula', deleteEstudiante);

module.exports = router;
