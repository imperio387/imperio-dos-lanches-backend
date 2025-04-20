const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  nome: String,
  produto: String,
  preco: Number,
  status: { type: String, default: 'Aguardando pagamento' },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
