// seed.js (im Backend)

const mongoose = require('mongoose');
const Product = require('./models/product.model'); 
//const dotenv = require('dotenv');
require('dotenv').config(); // <-- damit .env geladen wird


// 🔧 Verbindung zur MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🌱 Verbunden mit MongoDB...');
    return seedDatabase();
  })
  .catch(err => console.error('❌ Fehler bei MongoDB-Verbindung:', err));

async function seedDatabase() {
  // ✅ Beispiel-Daten 
  const sampleProducts = [
    { name: 'Milch', amount: 1, unit: 'Liter', expiryDate: '2025-04-01' },
    { name: 'Eier', amount: 10, unit: 'Stück', expiryDate: '2025-04-05' },
    { name: 'Butter', amount: 1, unit: 'Stück', expiryDate: '2025-05-01' },
    { name: 'Joghurt', amount: 2, unit: 'Stück', expiryDate: '2025-04-10' },
  { name: 'Käse', amount: 150, unit: 'g', expiryDate: '2025-04-15' },
  { name: 'Salami', amount: 100, unit: 'g', expiryDate: '2025-04-08' },
  { name: 'Schinken', amount: 120, unit: 'g', expiryDate: '2025-04-07' },
  { name: 'Tomaten', amount: 4, unit: 'Stück', expiryDate: '2025-04-03' },
  { name: 'Gurke', amount: 1, unit: 'Stück', expiryDate: '2025-04-02' },
  { name: 'Paprika', amount: 2, unit: 'Stück', expiryDate: '2025-04-05' },
  { name: 'Sahne', amount: 200, unit: 'ml', expiryDate: '2025-04-06' },
  { name: 'Margarine', amount: 250, unit: 'g', expiryDate: '2025-06-01' },
  { name: 'Orangensaft', amount: 1, unit: 'Liter', expiryDate: '2025-04-11' },
  { name: 'Cola', amount: 500, unit: 'ml', expiryDate: '2025-09-01' },
  { name: 'Senf', amount: 100, unit: 'g', expiryDate: '2025-10-10' },
  { name: 'Ketchup', amount: 300, unit: 'ml', expiryDate: '2025-11-01' },
  { name: 'Mayo', amount: 250, unit: 'ml', expiryDate: '2025-07-15' },
  { name: 'Feta', amount: 200, unit: 'g', expiryDate: '2025-04-09' },
  { name: 'Tzatziki', amount: 150, unit: 'g', expiryDate: '2025-04-10' },
  { name: 'Hackfleisch', amount: 400, unit: 'g', expiryDate: '2025-03-30' }
  ];

  try {
    await Product.deleteMany(); // 🔥 Bestehende löschen
    await Product.insertMany(sampleProducts); // ✅ Neue einfügen
    console.log('🌱 Datenbank wurde erfolgreich vorausgefüllt!');
    process.exit();
  } catch (error) {
    console.error('❌ Fehler beim Einfügen:', error);
    process.exit(1);
  }
}