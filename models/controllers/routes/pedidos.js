const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidosController');

router.post('/', controller.criarPedido);
router.get('/', controller.listarPedidos);

module.exports = router;
