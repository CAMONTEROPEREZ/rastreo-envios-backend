const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let pedidos = [
  { id: 1, cliente: 'Carlos', estado: 'En camino', entrega: '2025-06-11 13:00', retraso: false }
];

app.get('/', (req, res) => {
  res.send('API de rastreo funcionando!');
});

app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

app.listen(PORT, () => {
  console.log(`Servidor backend en puerto ${PORT}`);
});
