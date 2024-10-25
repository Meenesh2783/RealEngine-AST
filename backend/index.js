const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ruleRoutes = require('./routes/rules');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/rules', ruleRoutes);

// MongoDB Connection
const MONGO_URL = "mongodb+srv://meenesh_ruleengine:Meenesh2783@cluster0.f71spmw.mongodb.net/ruleEngine?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));