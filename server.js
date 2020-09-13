const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to Database
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({ msg: 'connecting to database' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
