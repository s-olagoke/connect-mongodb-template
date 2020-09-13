const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to Database
connectDB();

// creating a local port to access my server
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({ msg: 'connecting to database' });
});

// creating routes for my application and linking them to their path respectively
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// listen to the port for changes
app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
