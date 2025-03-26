const express = require('express');
const router = express.Router();
const Product = require('../models/product.model'); // Importiere das Mongoose-Modell

// GET /api/products - Alle Produkte abrufen
router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error('Fehler beim Abrufen der Produkte:', err);
      res.status(500).json({ message: 'Fehler beim Abrufen der Produkte.' });
    }
});

// GET /api/products/:id - Einzelnes Produkt abrufen
router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Produkt nicht gefunden' });
      }
    } catch (err) {
      console.error('Fehler beim Abrufen des Produkts:', err);
      res.status(500).json({ message: 'Fehler beim Abrufen des Produkts.' });
    }
});

// POST /api/products - Neues Produkt erstellen
router.post('/', async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error('Fehler beim Erstellen des Produkts:', err);
      res.status(500).json({ message: 'Fehler beim Erstellen des Produkts.' });
    }
});

// PUT /api/products/:id - Produkt aktualisieren
router.put('/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Produkt nicht gefunden.' });
      }
    } catch (err) {
      console.error('Fehler beim Aktualisieren des Produkts:', err);
      res.status(500).json({ message: 'Fehler beim Aktualisieren des Produkts.' });
    }
});

// DELETE /api/products/:id - Produkt löschen
router.delete('/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (deletedProduct) {
        res.json({ message: 'Produkt erfolgreich gelöscht.' });
      } else {
        res.status(404).json({ message: 'Produkt nicht gefunden.' });
      }
    } catch (err) {
      console.error('Fehler beim Löschen des Produkts:', err);
      res.status(500).json({ message: 'Fehler beim Löschen des Produkts.' });
    }
});

module.exports = router;
