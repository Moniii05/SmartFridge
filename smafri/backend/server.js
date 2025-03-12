const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());           // Erlaubt Cross-Origin-Zugriffe (z. B. von http://localhost:4200)
app.use(express.json());   // Damit du JSON-Body parsen kannst

// Temporäre In-Memory-Liste an Produkten (später Datenbank)
let products = [
  { id: '1', name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
  { id: '2', name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
  { id: '3', name: 'Karotte', amount: 7, unit: 'Stück', expiryDate: '2025-10-15' },
];

// GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produkt nicht gefunden' });
  }
});

// POST /api/products
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  // Simple ID-Generierung
  newProduct.id = String(products.length + 1);
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = updated;
    res.json(updated);
  } else {
    res.status(404).json({ message: 'Produkt nicht gefunden' });
  }
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: 'Produkt gelöscht' });
  } else {
    res.status(404).json({ message: 'Produkt nicht gefunden' });
  }
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
});
