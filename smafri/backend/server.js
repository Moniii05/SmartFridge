require('dotenv').config();

// server anpassen, damit models + routes verwendet
const productRoutes = require('./routes/product.routes');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const app = express();

app.use(cors());           // erlaubt Cross-Origin-Zugriffe von port
app.use(express.json());   // damit JSON-Body parsen kann

// 1. MongoDB-Verbindung herstellen
mongoose.connect(process.env.MONGO_URI)
    // alte Schreibweise --> Fehlermeldung
   // useNewUrlParser: true,
    //useUnifiedTopology: true
  
  .then(() => console.log('MongoDB verbunden'))
  .catch((err) => console.error('Fehler bei der DB-Verbindung:', err));

  // **NEU: Die Produkt-Routen einbinden**
app.use('/api/products', productRoutes);

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
});

//if (process.env.NODE_ENV !== 'production') {
 //   require('./seed'); // führt seed.js automatisch aus beim Start
 // }
  

// Optional  
//if (process.env.NODE_ENV !== 'production') {
   // require('./seed'); // Führt Seed automatisch lokal aus
 // } 
  
