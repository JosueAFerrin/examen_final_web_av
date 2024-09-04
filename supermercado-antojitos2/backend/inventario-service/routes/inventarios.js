// routes/inventarios.js
const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Obtener todos los registros de inventario
router.get('/', inventarioController.obtenerInventarios);

// Registrar un nuevo registro de inventario
router.post('/', inventarioController.crearInventario);

// Obtener un registro de inventario por ID
router.get('/:id', inventarioController.obtenerInventarioPorId);

// Actualizar un registro de inventario por ID
router.put('/:id', inventarioController.actualizarInventario);

// Eliminar un registro de inventario por ID
router.delete('/:id', inventarioController.eliminarInventario);

module.exports = router;
