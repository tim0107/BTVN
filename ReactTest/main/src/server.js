const express = require('express');
const connectDB = require('./Configs/database'); 
const cors = require('cors'); 
const itemRoutes = require('./routes/itemRoute');

const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use('/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
