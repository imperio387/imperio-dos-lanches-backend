const Pedido = require('../models/Pedido');
const qrcode = require('qrcode');

exports.criarPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();

    const payloadPix = `00020126410014BR.GOV.BCB.PIX011346119184830520400005303986540${pedido.preco.toFixed(2)}5802BR5920Império dos Lanches6009SAO PAULO62070503***6304`;
    const qrCode = await qrcode.toDataURL(payloadPix);

    res.status(201).json({ pedido, qrCode });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};

exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().sort({ data: -1 });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
};
